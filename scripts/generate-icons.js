const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" fill="none">
  <rect width="192" height="192" rx="32" fill="#11a4d4"/>
  <g fill="#fff">
    <path d="M48 144h72v12H48zM132 72h18c6.6 0 12 5.4 12 12v12c0 6.6-5.4 12-12 12h-18V72zm0 24h18v-12h-18v12zM126 48H36v108h90V48zm-12 96H48V60h66v84z"/>
    <path d="M84 24c-6.6 0-12 5.4-12 12h24c0-6.6-5.4-12-12-12zM60 36c0-3.3-2.7-6-6-6s-6 2.7-6 6h12zM120 36c0-3.3-2.7-6-6-6s-6 2.7-6 6h12z" opacity=".6"/>
  </g>
</svg>`;

const maskableSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" fill="none">
  <rect width="192" height="192" fill="#11a4d4"/>
  <g fill="#fff" transform="translate(24, 24) scale(0.75)">
    <path d="M48 144h72v12H48zM132 72h18c6.6 0 12 5.4 12 12v12c0 6.6-5.4 12-12 12h-18V72zm0 24h18v-12h-18v12zM126 48H36v108h90V48zm-12 96H48V60h66v84z"/>
    <path d="M84 24c-6.6 0-12 5.4-12 12h24c0-6.6-5.4-12-12-12zM60 36c0-3.3-2.7-6-6-6s-6 2.7-6 6h12zM120 36c0-3.3-2.7-6-6-6s-6 2.7-6 6h12z" opacity=".6"/>
  </g>
</svg>`;

const publicDir = path.join(__dirname, '..', 'public');

async function generateIcons() {
  console.log('Generating PWA icons...');

  // Generate regular icons
  const sizes = [192, 512];
  for (const size of sizes) {
    await sharp(Buffer.from(svgContent))
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, `icon-${size}.png`));
    console.log(`Created icon-${size}.png`);
  }

  // Generate apple touch icon (180x180)
  await sharp(Buffer.from(svgContent))
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Created apple-touch-icon.png');

  // Generate favicon.ico (32x32)
  await sharp(Buffer.from(svgContent))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32.png'));
  console.log('Created favicon-32.png');

  // Generate 16x16 for favicon
  await sharp(Buffer.from(svgContent))
    .resize(16, 16)
    .png()
    .toFile(path.join(publicDir, 'favicon-16.png'));
  console.log('Created favicon-16.png');

  // Generate maskable icons
  const maskableSizes = [192, 512];
  for (const size of maskableSizes) {
    await sharp(Buffer.from(maskableSvg))
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, `icon-maskable-${size}.png`));
    console.log(`Created icon-maskable-${size}.png`);
  }

  console.log('All icons generated successfully!');
}

generateIcons().catch(console.error);
