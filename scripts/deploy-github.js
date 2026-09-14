import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distRoot = path.resolve(projectRoot, 'dist');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const REPO_OWNER = 'Anurag-lakra610';
const REPO_NAME = 'Dentara-';

if (!GITHUB_TOKEN) {
  console.error('❌ Missing GITHUB_TOKEN environment variable!');
  process.exit(1);
}

function githubRequest(method, endpoint, bodyData = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: endpoint,
      method: method,
      headers: {
        'User-Agent': 'Dentara-Deployer-NodeJS',
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let responseBody = '';
      res.on('data', chunk => responseBody += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(responseBody || '{}');
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(parsed);
          } else {
            reject(new Error(`GitHub API Error (${res.statusCode}): ${parsed.message || responseBody}`));
          }
        } catch (e) {
          reject(new Error(`Response parse error: ${e.message}`));
        }
      });
    });

    req.on('error', (err) => reject(err));
    if (bodyData) {
      req.write(JSON.stringify(bodyData));
    }
    req.end();
  });
}

function getAllFiles(dirPath, arrayOfFiles = [], baseDir = dirPath) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (
      file === 'node_modules' || 
      file === '.git' || 
      file === 'dist' || 
      file === '.DS_Store' ||
      file === '.env' ||
      file.endsWith('.log') ||
      fullPath.includes('.github')
    ) {
      return;
    }
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles, baseDir);
    } else {
      const relativePath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
      arrayOfFiles.push({ fullPath, relativePath });
    }
  });

  return arrayOfFiles;
}

async function atomicCommitBranch(branchName, commitMessage, filesToCommit) {
  console.log(`\n📌 Creating Single Atomic Commit on branch '${branchName}'...`);
  
  let latestCommitSha = null;
  let baseTreeSha = null;

  try {
    const refData = await githubRequest('GET', `/repos/${REPO_OWNER}/${REPO_NAME}/git/ref/heads/${branchName}`);
    latestCommitSha = refData.object.sha;
    const commitData = await githubRequest('GET', `/repos/${REPO_OWNER}/${REPO_NAME}/git/commits/${latestCommitSha}`);
    baseTreeSha = commitData.tree.sha;
  } catch (err) {
    console.log(`  ℹ️ Branch '${branchName}' does not exist yet. Initializing new branch.`);
  }

  // Upload Blobs
  const treeItems = [];
  for (const file of filesToCommit) {
    const fileBuffer = fs.readFileSync(file.fullPath);
    const contentBase64 = fileBuffer.toString('base64');

    const blobRes = await githubRequest('POST', `/repos/${REPO_OWNER}/${REPO_NAME}/git/blobs`, {
      content: contentBase64,
      encoding: 'base64'
    });

    treeItems.push({
      path: file.relativePath,
      mode: '100644',
      type: 'blob',
      sha: blobRes.sha
    });

    console.log(`  ✓ Blob created: ${file.relativePath}`);
  }

  // Create Tree
  const treePayload = { tree: treeItems };
  if (baseTreeSha) {
    treePayload.base_tree = baseTreeSha;
  }
  const newTree = await githubRequest('POST', `/repos/${REPO_OWNER}/${REPO_NAME}/git/trees`, treePayload);

  // Create Commit
  const commitPayload = {
    message: commitMessage,
    tree: newTree.sha
  };
  if (latestCommitSha) {
    commitPayload.parents = [latestCommitSha];
  }
  const newCommit = await githubRequest('POST', `/repos/${REPO_OWNER}/${REPO_NAME}/git/commits`, commitPayload);

  // Update Branch Ref
  if (latestCommitSha) {
    await githubRequest('PATCH', `/repos/${REPO_OWNER}/${REPO_NAME}/git/refs/heads/${branchName}`, {
      sha: newCommit.sha,
      force: true
    });
  } else {
    await githubRequest('POST', `/repos/${REPO_OWNER}/${REPO_NAME}/git/refs`, {
      ref: `refs/heads/${branchName}`,
      sha: newCommit.sha
    });
  }

  console.log(`  ✓ Single Atomic Commit ${newCommit.sha.substring(0, 7)} created on '${branchName}'.`);
}

async function deploy() {
  console.log(`🚀 Starting Unified Atomic Deployment to https://github.com/${REPO_OWNER}/${REPO_NAME}...`);

  // 1. Commit Source Files to main branch (1 single commit)
  const sourceFiles = getAllFiles(projectRoot);
  await atomicCommitBranch('main', 'Deploy Dentara website source code & assets', sourceFiles);

  // 2. Commit Production Built Dist Files to gh-pages branch (1 single commit for instant live hosting)
  if (fs.existsSync(distRoot)) {
    const distFiles = getAllFiles(distRoot, [], distRoot);
    await atomicCommitBranch('gh-pages', 'Deploy built production dist to GitHub Pages', distFiles);
  }

  // 3. Direct Vercel Production Deployment
  try {
    console.log(`\n▲ Deploying directly to Vercel Production...`);
    const { execSync } = await import('child_process');
    execSync('npx vercel --prod --yes', { stdio: 'inherit', cwd: projectRoot });
  } catch (vErr) {
    console.log(`  ℹ️ Vercel CLI deploy notice:`, vErr.message);
  }

  console.log(`\n🎉 DEPLOYMENT COMPLETE!`);
  console.log(`🌐 Repository: https://github.com/${REPO_OWNER}/${REPO_NAME}`);
  console.log(`⚡ Live Vercel URL: https://dentara-one.vercel.app`);
  console.log(`⚡ Live GitHub Pages: https://anurag-lakra610.github.io/Dentara-/`);
}

deploy().catch(err => {
  console.error(`❌ Deployment failed:`, err);
  process.exit(1);
});
