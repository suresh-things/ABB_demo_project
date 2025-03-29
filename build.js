const fs = require('fs');
console.log("Building the project...");

// Ensure the 'dist' directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Copy files from 'src' to 'dist'
fs.copyFileSync('my_nodeapp/app.js', 'dist/app.js');

console.log("Build complete!");
