const express = require('express');
const app = express();
const port = 3005;

let teachers = [];

app.use(express.json());

// Insert teacher
app.post('/teacher', (req, res) => {
  const { id, name, subject } = req.body;
  const teacher = { id, name, subject };
  teachers.push(teacher);
  res.json({ message: "Teacher added", data: teacher });
});

app.listen(port, () => {
  console.log(`College Management running at http://localhost:${port}`);
});
