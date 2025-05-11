const { MongoClient } = require('mongodb');

async function run() {
  const client = new MongoClient("mongodb://localhost:27017");

  try {
    await client.connect();
    const db = client.db("library");
    const collection = db.collection("books");

    const result = await collection.insertOne({
      title: "Atomic Habits",
      author: "James Clear",
      publisher: "Penguin"
    });

    console.log("Inserted:", result.insertedId);
  } finally {
    await client.close();
  }
}

run();
