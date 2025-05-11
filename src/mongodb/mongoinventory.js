const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function run() {
    try {
        // Connect
        await client.connect();
        console.log("Connected successfully");

        // Connect to DB
        const db = await client.db("tee");

        // Check if collection exists
        const collections = await db.listCollections({ name: "inventory" }).toArray();
        let collection;

        if (collections.length === 0) {
            collection = await db.createCollection("inventory");
            console.log("Collection created successfully");
        } else {
            collection = db.collection("inventory");
            console.log("Using existing collection");
        }

        // INSERT
        // const insert = await collection.insertMany([
        //     { id: 4, name: "cheese", qty: 2 },
        //     { id: 5, name: "jam", qty: 1 }
        // ]);
        // console.log("Inserted successfully");

        // READ all
        // const r1 = await collection.find().toArray();
        // console.log("All records:", r1);

        // READ qty > 2
        // const r2 = await collection.find({ qty: { $gt: 2 } }).toArray();
        // console.log("Qty > 2:", r2);

        // SORT qty desc
        // const r3 = await collection.find().sort({ qty: -1 }).toArray();
        // console.log("Sorted by qty:", r3);

        // UPDATE
        // const update = await collection.updateOne({ name: "jam" }, { $set: { qty: 2 } });
        // console.log("Quantity updated");

        // DELETE
        // const del = await collection.deleteOne({ id: 4 });
        // console.log("Deleted successfully");

    } catch (err) {
        console.log("Error:", err);
    } finally {
        await client.close();
    }
}
run();
