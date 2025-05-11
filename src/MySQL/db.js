// db.js
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root', // Add your MySQL password
    database: 'collegeDB'
});
connection.connect(err => {
    if (err) throw err;
    console.log('MySQL connected!');
});
module.exports = connection;
