import express from "express";
import { products, users } from "./data.js";
const app = express();

const PORT = 5000;

// app.use(express.static("./Course-Website"));
app.get("/", (req, res) => {
  res.status(200).json(products);
});

app.get("/users", (req, res) => {
  res.status(200).json({ users });
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Something went wrong</h1>");
});

app.listen(PORT, () =>
  console.log(`Server is running in: http://localhost:${PORT}`)
);
