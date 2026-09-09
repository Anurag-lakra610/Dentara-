import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const REPO_OWNER = 'Anurag-lakra610';
const REPO_NAME = 'Dentara-';
const BRANCH = 'main';

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
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (
      file === 'node_modules' || 
      file === '.git' || 
      file === 'dist' || 
      file === '.DS_Store' ||
      file === '.env' ||
      file.endsWith('.log')
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

async function deploy() {
  console.log(`🚀 Starting Atomic GitHub Deployment to https://github.com/${REPO_OWNER}/${REPO_NAME}...`);

  const files = getAllFiles(projectRoot);
  console.log(`📁 Found ${files.length} project files for atomic commit.`);

  // 1. Get reference to latest commit on main branch
  let latestCommitSha = null;
  let baseTreeSha = null;

  try {
    const refData = await githubRequest('GET', `/repos/${REPO_OWNER}/${REPO_NAME}/git/ref/heads/${BRANCH}`);
    latestCommitSha = refData.object.sha;
    const commitData = await githubRequest('GET', `/repos/${REPO_OWNER}/${REPO_NAME}/git/commits/${latestCommitSha}`);
    baseTreeSha = commitData.tree.sha;
    console.log(`📌 Found latest commit ${latestCommitSha.substring(0, 7)} on branch '${BRANCH}'`);
  } catch (err) {
    console.log(`ℹ️ Branch '${BRANCH}' initialized.`);
  }

  // 2. Upload file contents as Git Blobs
  console.log(`⏳ Uploading file blobs to Git Data API...`);
  const treeItems = [];

  for (const file of files) {
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

  // 3. Create a Single Git Tree
  console.log(`🌳 Creating Single Git Tree...`);
  const treePayload = { tree: treeItems };
  if (baseTreeSha) {
    treePayload.base_tree = baseTreeSha;
  }
  const newTree = await githubRequest('POST', `/repos/${REPO_OWNER}/${REPO_NAME}/git/trees`, treePayload);

  // 4. Create a Single Atomic Commit
  console.log(`📝 Creating Single Atomic Commit...`);
  const commitPayload = {
    message: 'Update Dentara website hero section & layout',
    tree: newTree.sha
  };
  if (latestCommitSha) {
    commitPayload.parents = [latestCommitSha];
  }
  const newCommit = await githubRequest('POST', `/repos/${REPO_OWNER}/${REPO_NAME}/git/commits`, commitPayload);

  // 5. Update Git Branch Reference
  console.log(`📌 Updating Git Branch reference '${BRANCH}' to commit ${newCommit.sha.substring(0, 7)}...`);
  if (latestCommitSha) {
    await githubRequest('PATCH', `/repos/${REPO_OWNER}/${REPO_NAME}/git/refs/heads/${BRANCH}`, {
      sha: newCommit.sha,
      force: true
    });
  } else {
    await githubRequest('POST', `/repos/${REPO_OWNER}/${REPO_NAME}/git/refs`, {
      ref: `refs/heads/${BRANCH}`,
      sha: newCommit.sha
    });
  }

  console.log(`\n✅ SUCCESS! All ${files.length} files committed in 1 single atomic commit on '${BRANCH}' branch.`);
  console.log(`🌐 Repository URL: https://github.com/${REPO_OWNER}/${REPO_NAME}`);
}

deploy().catch(err => {
  console.error(`❌ Deployment failed:`, err);
  process.exit(1);
});
