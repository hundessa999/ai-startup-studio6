const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Input and output paths
const srcFile = path.join(__dirname, 'assets_raw', 'combined_tools.png');
const destFolder = path.join(__dirname, 'public', 'images');

// Create destination folder if not exists
if (!fs.existsSync(destFolder)) fs.mkdirSync(destFolder, { recursive: true });

// Tool names
const toolNames = [
  'sociaboost.png',
  'autoprompt.png',
  'ai-ad-generator.png',
  'storeboost.png',
  'nicheblog.png',
  'ai-reels.png'
];

// Dimensions of each tool in combined image
const width = 400;  // adjust if your icons are wider
const height = 400;

(async () => {
  try {
    for (let i = 0; i < toolNames.length; i++) {
      await sharp(srcFile)
        .extract({ left: i * width, top: 0, width, height })
        .toFile(path.join(destFolder, toolNames[i]));
      console.log(`✅ Created ${toolNames[i]}`);
    }
    console.log('🎉 All images split and resized successfully!');
  } catch (err) {
    console.error('❌ Error:', err);
  }
})();
