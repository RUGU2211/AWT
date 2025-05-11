const {MongoClient} = require("mongodb")

const url = "mongodb://localhost:27017/"
const client = new MongoClient(url);

async function run() {
    try{
        // connect
        await client.connect()
        console.log("connected successfully");
        
        // collection
        const db = client.db("tee")
        const collection = await db.createCollection("reviews")
        console.log("collection created successfully");
        
        // insert
        // const insert = await collection.insertOne({id:4,platform:"abc",rating:3})
        // console.log("inserted successfully");

        // insertmany 
        // const insertmany = await collection.insertMany([{id:2,platform:"coursera",rating:3},{id:3,platform:"upgrad",rating:4}])
        // console.log("inserted many records");
        
        // read 
        // const data = await collection.find().toArray()
        // console.log(data);
        
        // read
        // const sorted = await collection.find().sort({rating:1}).toArray()
        // console.log(sorted);

        // read rating more than 3
        // const ratingmore3 = await collection.find({rating:{$gt:3}}).toArray()
        // console.log(ratingmore3);
        
        // update 
        // const update = await collection.updateOne({id:4},{$set:{rating:2}})
        // console.log("updated record successfully");
        
        // delete
        const del = await collection.deleteOne({id:4})
        console.log("deleted record successfully");
        
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