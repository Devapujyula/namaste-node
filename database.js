const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://prakashdsp7777:prakashdsp7777@namastenodejs.jlhesih.mongodb.net/?retryWrites=true&w=majority&appName=NamasteNodejs";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected to Db Successfully to server");

  const db = client.db(dbName);
  const collection = db.collection("User");

  // Insert document
  const data = {
    firstName: "Prakash",
    lastName: "DSP",
    city: "Amalapuram",
    phoneNumber: "9876543210",
  };

  const insertResult = await collection.insertMany([data]);
  console.log("Inserted Documents =>", insertResult);

  // Read
  const findResult = await collection.find({}).toArray();
  console.log("Found Documents =>", findResult);

  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
