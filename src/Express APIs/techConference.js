const express = require('express');
const app = express();
const port = 3003;

let speakers = [];

app.use(express.json());

app.post('/speaker', (req, res) => {
  const { name, age } = req.body;
  speakers.push({ name, age });
  res.json({ message: 'Speaker added!', data: speakers });
});

app.get('/speakers', (req, res) => {
  res.json(speakers);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
