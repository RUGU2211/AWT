const fs = require("fs")
const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("enter name of student : ",(name)=>{
    rl.question("enter marks of student : ",(marks)=>{
        const data = `${name} - ${marks} \n`

        fs.appendFile("result.txt",data,"utf-8",(err)=>{
            if(err){
                console.log(err);
                return
            }
            console.log("file created successfully with name and marks");
            
        })
    })
})