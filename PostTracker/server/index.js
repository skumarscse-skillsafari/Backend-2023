import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// http://localhost:5000/users
app.use("/users", userRoutes);
// http://localhost:5000/posts
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to PostTracker application</h1>");
});

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(
      PORT,
      console.log(`Server is running in: http://localhost:${PORT}`)
    )
  )
  .catch((err) => console.log(`Something went wrong. ErrorMsg: ${err}`));
