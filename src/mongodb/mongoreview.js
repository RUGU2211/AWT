const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function run() {
  try {
    // connect
    await client.connect();
    console.log("Connected successfully");

    // database and collection
    const db = client.db("tee");

    // Check if collection already exists
    const collections = await db.listCollections({ name: "reviews" }).toArray();
    let collection;
    if (collections.length === 0) {
      collection = await db.createCollection("reviews");
      console.log("Collection created successfully");
    } else {
      collection = db.collection("reviews");
      console.log("Collection already exists, using it");
    }

    // INSERT ONE
    const insert = await collection.insertOne({ id: 4, platform: "abc", rating: 3 });
    console.log("Inserted one document successfully");

    // INSERT MANY
    // const insertmany = await collection.insertMany([
    //   { id: 2, platform: "coursera", rating: 3 },
    //   { id: 3, platform: "upgrad", rating: 4 }
    // ]);
    // console.log("Inserted many records");

    //READ ALL
    const data = await collection.find().toArray();
    console.log("All Data:", data);

    // READ with SORT
    // const sorted = await collection.find().sort({ rating: 1 }).toArray();
    // console.log("Sorted by Rating:", sorted);

    // READ rating > 3
    // const ratingMore3 = await collection.find({ rating: { $gt: 3 } }).toArray();
    // console.log("Rating > 3:", ratingMore3);

    // UPDATE
    // const update = await collection.updateOne({ id: 4 }, { $set: { rating: 2 } });
    // console.log("Updated record successfully");

    // DELETE
    // const del = await collection.deleteOne({ id: 4 });
    // console.log("Deleted record successfully");

  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }
}

run();
