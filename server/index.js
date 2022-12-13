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
