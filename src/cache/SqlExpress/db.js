const mysql = require("mysql2")

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"tee"
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("connected to db");
    
})
module.exports = connection;
