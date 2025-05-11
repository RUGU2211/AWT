// routes/restaurants.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/highrated', (req, res) => {
    const query = "SELECT * FROM restaurants WHERE rating > 5";
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

module.exports = router;
