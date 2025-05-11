const { MongoClient } = require('mongodb');

async function run() {
  const client = new MongoClient("mongodb://localhost:27017");

  try {
    await client.connect();
    const db = client.db("company");
    const users = db.collection("users");

    const result = await users.find({ age: { $gt: 40 } }).toArray();
    console.log("Users > 40:\n", result);
  } finally {
    await client.close();
  }
}

run();
