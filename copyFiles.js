let fs = require('fs');
let path = require('path');

// Define the source and destination directories
const srcDir = path.resolve(__dirname, './src/lib');
const destDir = path.resolve(__dirname, './lib/lib');

// List of files to copy
const filesToCopy = ['conio.c', 'conio.h'];

// Function to copy a file
function copyFile(srcFile, destFile) {
  fs.copyFileSync(srcFile, destFile);
}

// Function to create a directory if it doesn't exist
function createDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Copy the specified files
createDir(destDir);
filesToCopy.forEach(file => {
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(destDir, file);
  copyFile(srcPath, destPath);
});

console.log(`Successfully copied files to ${destDir}`);
