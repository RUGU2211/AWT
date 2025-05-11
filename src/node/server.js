// server.js
// Run: node server.js

const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`<form method="POST" action="/submit">
              <input type="text" name="text" />
              <button type="submit">Submit</button>
            </form>`);
});

app.post('/submit', (req, res) => {
  fs.writeFileSync('input.txt', req.body.text);
  res.send('Text written to input.txt');
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
