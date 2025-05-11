const connection = require("./db")

const del = "delete from inventory where qty = ?";
const data = [0]

connection.query(del,data,(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("record deleted successfully");
    
})