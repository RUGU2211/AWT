// routes/properties.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// 1. Update Mumbai property prices
router.put('/update-mumbai', (req, res) => {
    const query = "UPDATE properties SET price = price * 1.10 WHERE city = 'Mumbai'";
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.send("Mumbai property prices updated by 10%");
    });
});

// 2. Display all properties
router.get('/', (req, res) => {
    db.query("SELECT * FROM properties", (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// 3. Delete properties < 1 Cr
router.delete('/delete-cheap', (req, res) => {
    const query = "DELETE FROM properties WHERE price < 10000000";
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.send("Properties under 1 Cr deleted");
    });
});

module.exports = router;
