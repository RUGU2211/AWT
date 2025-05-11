// fs-check-log.js
// Run: node fs-check-log.js

const fs = require('fs');
const file = 'log.txt';

if (fs.existsSync(file)) {
  fs.appendFileSync(file, '\nServer started......');
  console.log('Appended to existing log file');
} else {
  fs.writeFileSync(file, 'Server started');
  console.log('Created and wrote to log file');
}
