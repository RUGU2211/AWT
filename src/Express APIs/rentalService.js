const express = require('express');
const app = express();
const port = 3004;

let bookings = [
  { id: 1, expiry_date: "2024-01-01" },
  { id: 2, expiry_date: "2023-01-01" },
  { id: 3, expiry_date: "2026-05-10" }
];

app.use(express.json());

// Remove expired bookings
app.delete('/bookings/removeExpired', (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  bookings = bookings.filter(b => b.expiry_date > today);
  res.json({ message: "Expired bookings removed", data: bookings });
});

app.listen(port, () => {
  console.log(`Rental Service running at http://localhost:${port}`);
});
