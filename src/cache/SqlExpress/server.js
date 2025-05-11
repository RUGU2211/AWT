const express = require("express")
const bodyParser = require("body-parser")
const db = require("./db")

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// insert
app.post("/addinventory",(req,res)=>{
    const {id,name,qty} = req.body;
    const insert = "insert into inventory values (?,?,?)";
    const data = [id,name,qty]

    db.query(insert,data,(err)=>{
        if(err){
            console.log(err);
            return
        }
        console.log("record inserted successfully");
        res.status(201).json({message:"record inserted successfully"})
    })
})
// read
app.get("/getinventory",(req,res)=>{
    const select = "select * from inventory";

    db.query(select,(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        console.log("data fetched");
        res.status(200).json(result);
    })
})

//read with specific id
app.get("/getinventory/:id",(req,res)=>{
    const id = req.params.id;
    const select = "select * from inventory where id = ?"
    const data = [id]
    db.query(select,data,(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        console.log("data fetched with id");
        res.status(200).json(result)
    })
}) 

// update
app.put("/putinventory/:name",(req,res)=>{
    const name = req.params.name;
    const qty = req.body.qty;
    const update = "update inventory set qty = ? where name = ?";
    const data = [qty,name]

    db.query(update,data,(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        console.log("record updated successfully");
        res.status(200).json(result);
    })
})
// delete 
app.delete("/delinventory/:id",(req,res)=>{
    const id = req.params.id;
    const delid = "delete from inventory where id = ?"
    const data = [id]
    
    db.query(delid,data,(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        console.log("deleted with id",id);
        res.status(200).json(result)
    })
})

app.listen(3000)
