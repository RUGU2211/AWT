const connection = require("./db")

const insertquery = "insert into inventory values (?,?,?)"
const data = [4,"cheese",0]

connection.query(insertquery,data,(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("record inserted successfully");

})