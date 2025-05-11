// routes/employees.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/absent', (req, res) => {
    const query = "SELECT * FROM employees WHERE absent_days > 5 AND month = 'April'";
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

module.exports = router;
