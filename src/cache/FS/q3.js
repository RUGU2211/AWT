const fs = require("fs")
const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("enter file name : ",(fn)=>{
    fs.unlink(fn,(err)=>{
        if(err){
            console.log(err);
            return
        }
        console.log("file deleted");
        
    })
})