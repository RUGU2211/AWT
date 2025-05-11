// delete-file.js
// Run: node delete-file.js


const fs = require('fs');
const readline = require('readline');

// Create interface for input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for file name
rl.question('Enter the file name to delete (with extension): ', (file) => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`File "${file}" deleted successfully.`);
  } else {
    console.log(`File "${file}" does not exist.`);
  }

  rl.close();
});





// const fs = require('fs');
// const file = 'temp.txt';

// if (fs.existsSync(file)) {
//   fs.unlinkSync(file);
//   console.log('File deleted successfully.');
// } else {
//   console.log('File does not exist.');
// }



