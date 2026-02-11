const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Input file
const combinedFile = path.join(__dirname, 'assets_raw', 'combined_tools.png');

// Output folder
const destFolder = path.join(__dirname, 'public', 'images');

// Create output folder if not exists
if (!fs.existsSync(destFolder)) {
  fs.mkdirSync(destFolder, { recursive: true });
}

// Names for each individual tool image
const toolNames = [
  'sociaboost.png',
  'autoprompt.png',
  'ai-ad-generator.png',
  'storeboost.png',
  'nicheblog.png',
  'ai-reels.png'
];

// Assuming combined image is horizontal row: 6 images of equal width
const width = 400;   // adjust if your icons are larger
const height = 400;

toolNames.forEach((name, index) => {
  sharp(combinedFile)
    .extract({ left: index * width, top: 0, width: width, height: height })
    .toFile(path.join(destFolder, name))
    .then(() => console.log(`Created ${name}`))
    .catch(err => console.error(err));
});

console.log('Splitting and resizing started...');
