/* external imports */
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

/* application level connection */
const app = express();
const port = process.env.PORT || 5000;

/* middlewares connection */
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@todoapp.mfoky.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

/* application methods integration */
const run = async () => {
  try {
    const db = client.db("simple-cms-redux");
    const blogsCollection = db.collection("blogs");
    const usersCollection = db.collection("users");
    console.log("Simple CMS Redux connected successfully.");
   
    // this api for get blogs 
    app.get("/blogs", async (req, res) => {
      const blogs = blogsCollection.find({});
      const result = await blogs.toArray();

      res.status(200).send({
        status: true,
        message: "OK",
        description: "Fetching all blogs successfully.",
        data: result,
      });
    });
    // this api for get blogs  use id 
    app.get("/blog/:id", async (req, res) => {
      const id = req.params.id;
      const result = await blogsCollection.findOne({ _id: ObjectId(id) });

      res.status(200).send({
        status: true,
        message: "OK",
        description: "Fetching specific blog successfully.",
        data: result,
      });
    });
// this api for post blogs 
    app.post("/blog", async (req, res) => {
      const blog = req.body;
      const result = await blogsCollection.insertOne(blog);

      res.status(201).send({
        status: true,
        message: "Created",
        description: "New blog insert successfully.",
        data: result,
      });
    });
// this api for patch blog use id 
    app.patch("/blog/:id", async (req, res) => {
      const id = req.params.id;
      const body = req.body;
      const result = await blogsCollection.updateOne(
        { _id: ObjectId(id) },
        { $set: body },
        { upsert: true }
      );

      res.status(202).send({
        status: true,
        message: "Accepted",
        description: "Update existing blog successfully.",
        data: result,
      });
    });
// this api for delete a blog use id 
    app.delete("/blog/:id", async (req, res) => {
      const id = req.params.id;
      const result = await blogsCollection.deleteOne({ _id: ObjectId(id) });

      res.status(202).send({
        status: true,
        message: "Accepted",
        description: "Remove existing blog successfully.",
        data: result,
      });
    });
// this api for post user info 
    app.post("/user", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);

      res.status(202).send({
        status: true,
        message: "Created",
        description: "Successfully created new user.",
        data: result,
      });
    });
// this api for get user email 
    app.get("/user/:email", async (req, res) => {
      const email = req.params.email;
      const result = await usersCollection.findOne({ email: email });

      res.status(200).send({
        status: true,
        message: "OK",
        description: "Fetching specific blog successfully.",
        data: result,
      });
    });
  } finally {
    // await client.close();
  }
};
run().catch((err) => console.log(err));

/* application connection establishment */
app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "OK",
    description: "Simple CMS Redux connection establish successfully.",
  });
});

app.listen(port, () => {
  console.log(`Simple CMS Redux listening on port ${port}.`);
});
