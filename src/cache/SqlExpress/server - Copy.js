const express = require("express")
const bodyParser = require("body-parser")
const db = require("./db")

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// insert
app.post("/insertprop",(req,res)=>{
    const {id,city,price} = req.body;
    const insertQ = "insert into properties values (?,?,?)"
    const data= [id,city,price]

    db.query(insertQ,data,(err)=>{
        if(err){
            console.log(err);
            return
        }
        console.log("record inserted successfully");
        res.status(201).json({message:"record inserted successfully"})
    })
})

// get
app.get("/getprop",(req,res)=>{
    const selectQ = "select * from properties";

    db.query(selectQ,(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        console.log("data fetched successfully");
        res.status(200).json(result)
    })
})

//get specific property with id 
app.get("/getprop/:id",(req,res)=>{
    const id = req.params.id;
    const whereQ = "select * from properties where id = ?"
    const data = [id]

    db.query(whereQ,data,(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        console.log("data fetched wih specific id");
        res.status(200).json(result)
    })
})

// update price of specific property
app.put("/updateprop/:name",(req,res)=>{
    const name = req.params.name;
    const price = req.body.price;
    const update = "update properties set price = ? where city = ?"
    const data = [price,name]

    db.query(update,data,(err)=>{
        if(err){
            console.log(err);
            return
        }
        console.log("updated record successfully");
        res.status(201).json({message:"record updated successfully"})

    })
})

// delete specific property with id
app.delete("/deleteprop/:id",(req,res)=>{
    const id = req.params.id;
    const delid = "delete from properties where id = ? ";
    const data = [id]

    db.query(delid,data,(err)=>{
        if(err){
            console.log(err);
            return
        }
        console.log("deleted record successfully");
        res.status(200).json({ message: "Record deleted successfully" });
    })
})
app.listen(3000)
