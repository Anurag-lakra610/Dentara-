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
  console.log(`🚀 Starting GitHub Deployment to https://github.com/${REPO_OWNER}/${REPO_NAME}...`);

  const files = getAllFiles(projectRoot);
  console.log(`📁 Found ${files.length} project files to upload.`);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileBuffer = fs.readFileSync(file.fullPath);
    const contentBase64 = fileBuffer.toString('base64');
    const pathUrl = encodeURIComponent(file.relativePath).replace(/%2F/g, '/');

    // Check if file exists to get SHA for updating
    let sha = null;
    try {
      const existing = await githubRequest('GET', `/repos/${REPO_OWNER}/${REPO_NAME}/contents/${pathUrl}?ref=${BRANCH}`);
      sha = existing.sha;
    } catch (e) {
      // File doesn't exist yet
    }

    const payload = {
      message: `Add ${file.relativePath}`,
      content: contentBase64,
      branch: BRANCH
    };
    if (sha) {
      payload.sha = sha;
    }

    await githubRequest('PUT', `/repos/${REPO_OWNER}/${REPO_NAME}/contents/${pathUrl}`, payload);
    console.log(`  ✓ Uploaded [${i + 1}/${files.length}] ${file.relativePath}`);
  }

  console.log(`\n✅ SUCCESS! All project files successfully uploaded to GitHub repo main branch.`);
  console.log(`🌐 Repository URL: https://github.com/${REPO_OWNER}/${REPO_NAME}`);
}

deploy().catch(err => {
  console.error(`❌ Deployment failed:`, err);
  process.exit(1);
});
