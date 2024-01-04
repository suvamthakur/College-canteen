const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 6001;
require('dotenv').config();

app.use(cors());
app.use(express.json());

// MongoDB Cofig

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xmphedy.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    await client.connect();

    // Database & collections
    const menuCollections = client.db("canteen").collection("menu");
    const cartCollections = client.db("canteen").collection("cartItems");

    // Menu items operations
    app.get("/menu", async(req, res)=> {
        const result = await menuCollections.find().toArray();
        res.send(result)
    })

    // Cart operations
    
    // posting cart data to DB
    app.post("/carts", async(req, res) => {
      const cartItems = req.body;
      const result = await cartCollections.insertOne(cartItems);
      res.send(result);
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", function(req, res) {
    res.send("hello world")
})

app.listen(port, function() {
    console.log(`Example app listening on port ${port}`)
})

