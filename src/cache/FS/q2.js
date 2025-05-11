const fs = require("fs")
const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("enter file name : ",(fn)=>{
    fs.readFile(fn,"utf-8",(err,data)=>{
        const result = data.toUpperCase()

        fs.writeFile(fn,result,"utf-8",(err)=>{
            if(err){
                console.log(err);
                return
            }
            console.log("file updated with uppercase");
            
        })
    })
})