import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const indexHtml = path.join(distDir, 'index.html');
const notFoundHtml = path.join(distDir, '404.html');

if (fs.existsSync(indexHtml)) {
    fs.copyFileSync(indexHtml, notFoundHtml);
    console.log('✅ Copied index.html to 404.html for GitHub Pages SPA support.');
} else {
    console.error('❌ dist/index.html not found. Build failed?');
    process.exit(1);
}
