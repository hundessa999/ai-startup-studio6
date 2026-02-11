const fs = require('fs');
const path = require('path');

const srcFolder = path.join(__dirname, 'assets_raw');
const destFolder = path.join(__dirname, 'public', 'images');

// Create destination folder if it doesn't exist
if (!fs.existsSync(destFolder)) {
  fs.mkdirSync(destFolder, { recursive: true });
}

// Copy each file
fs.readdirSync(srcFolder).forEach(file => {
  const srcFile = path.join(srcFolder, file);
  const destFile = path.join(destFolder, file);
  fs.copyFileSync(srcFile, destFile);
  console.log(`Copied ${file} → /public/images/`);
});

console.log('All images copied successfully!');
