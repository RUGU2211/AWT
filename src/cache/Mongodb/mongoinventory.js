const {MongoClient} = require("mongodb")

const url = "mongodb://localhost:27017/"
const client = new MongoClient(url)

async function run() {
    try{
        // connect
        await client.connect();
        console.log("connected successfully");

        //collection
        const db = await client.db("tee")
        const collection = await db.createCollection("inventory")
        console.log("collection created successfully");
        
        // insert
        // const insert = await collection.insertMany([{id:4,name:"cheese",qty:2},{id:5,name:"jam",qty:1}])
        // console.log("inserted successfully");

        // read
        // const r1 = await collection.find().toArray()
        // console.log(r1);
        
        // const r2 = await collection.find({qty:{$gt:2}}).toArray()
        // console.log((r2));
        
        // const r3 = await collection.find().sort({qty:-1}).toArray()
        // console.log(r3);
        
        // update
        // const update = await collection.updateOne({name:"jam"},{$set:{qty:2}})
        // console.log("quantity updated");

        // delete
        // const del = await collection.deleteOne({id:4})
        // console.log("deleted successfully");
        
        
        
    }
    catch(err){
        console.log(err);
        return
    }
    finally{
        client.close()
    }
}
run()