const fs = require("fs")

if(fs.existsSync("log.txt")){
    fs.appendFile("log.txt","server-started","utf-8",(err)=>{
        if(err){
            console.log(err);
            return
        }
        console.log("appended in file");
    })
    console.log("file exists");
}
else{
    fs.writeFile("log.txt","server-started","utf-8",(err)=>{
        if(err){
            console.log(err);
            return
        }
        console.log("created new file");
    })
}