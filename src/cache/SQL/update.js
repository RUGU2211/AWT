const connection = require("./db")

const update = "update inventory set qty = ? where name = ?";
const data = [4,"bread"]

connection.query(update,data,(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("record updated successfully");    
})