// school-results.js
// Run: node school-results.js

const fs = require('fs');
fs.appendFileSync('results.txt', '\nStudent A - 89%');
console.log('Result added.');
