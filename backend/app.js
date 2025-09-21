import express from "express";
import cors from "cors";
import { MongoClient, ObjectId } from "mongodb";

const app = express();
const PORT = process.env.PORT || 4000;


const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);


app.use(cors({ origin: "https://xclone-inky.vercel.app" })); 
app.use(express.json()); // parse JSON bodies

async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    const projectDB = client.db("projectx");
    const chatCollection = projectDB.collection("chat");

    const cricketDB = client.db("cricket");
    const statCollection = cricketDB.collection("stat");

    // Root
    app.get("/", (req, res) => {
      res.send("Hello from backend!");
    });

    // Get all cricket stats
    app.get("/c", async (req, res) => {
      const stats = await statCollection.find().toArray();
      res.json(stats);
    });

    // Get all chat messages
    app.get("/posts", async (req, res) => {
      const posts = await chatCollection.find().toArray();
      res.json(posts);
    });

    // Add a new chat message
    app.post("/add/post", async (req, res) => {
      const { content } = req.body;
      if (!content) return res.status(400).json({ error: "Content required" });

      const result = await chatCollection.insertOne({ content });
      res.json({ message: "Post added", id: result.insertedId });
    });

    // Delete a chat message
    app.delete("/delete/post/:id", async (req, res) => {
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

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

main();
