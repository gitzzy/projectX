const express = require('express');
const cors = require('cors'); // import cors
const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');

const app = express();
const port = 4000;

// Enable CORS for your frontend
app.use(cors({ origin: 'http://localhost:5173' })); 
app.use(express.json()); // to parse JSON bodies

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const projectDB = client.db("projectx");
    const chatCollection = projectDB.collection("chat");

    const cricketDB = client.db("cricket");
    const statCollection = cricketDB.collection("stat");

    // Root
    app.get('/', (req, res) => {
      res.send('Hello from backend!');
    });

    // Get all cricket stats
    app.get('/c', async (req, res) => {
      const stats = await statCollection.find().toArray();
      res.json(stats);
    });

    // Get all chat messages
    app.get('/posts', async (req, res) => {
      const posts = await chatCollection.find().toArray();
      res.json(posts);
    });

    // Add a new chat message
    app.post('/add/post', async (req, res) => {
      const { content } = req.body;
      if (!content) return res.status(400).json({ error: "Content required" });

      const result = await chatCollection.insertOne({ content });
      res.json({ message: "Post added", id: result.insertedId });
    });

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });

    app.delete('/delete/post/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await chatCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      res.json({ message: "Post deleted" });
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete post" });
  }
});

  } catch (err) {
    console.error(err);
  }
}

main();
