const connection = require("./db")

const createQuery = `create table inventory (
id int primary key,
name varchar(10),
qty int)`;

connection.query(createQuery,(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("table created successfully");
    
})