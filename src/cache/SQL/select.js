const connection = require("./db")

const select = "select * from inventory order by qty desc"

connection.query(select,(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    
})