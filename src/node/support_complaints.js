// support-complaints.js
// Run: node support-complaints.js

const fs = require('fs');
const readline = require('readline');

const file = 'complaints.txt';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your complaint: ", (input) => {
  const content = `\n${input}`;
  if (fs.existsSync(file)) {
    fs.appendFileSync(file, content);
    console.log('Complaint appended.');
  } else {
    fs.writeFileSync(file, content);
    console.log('Complaint recorded.');
  }
  rl.close();
});
