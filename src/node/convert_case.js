// convert-case.js
// Run: node convert-case.js

const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter text to convert to UPPERCASE: ", (input) => {
  const upper = input.toUpperCase();
  fs.writeFileSync('converted.txt', upper);
  console.log('Saved in converted.txt');
  rl.close();
});
