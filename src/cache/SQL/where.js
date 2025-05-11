const connection = require("./db")

const where = "select * from inventory where qty=?"
const data = [0]

connection.query(where,data,(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    
})