import express from "express";
import { middleware, middlewareOne } from "./middleware-exports.js";
const app = express();
const PORT = 5000;

app.use(middleware);
app.get("/", (req, res) => {
  res.status(200).send("<h1>Home Page</h1>");
});

app.get("/about", middlewareOne, (req, res) => {
  res.status(200).send("<h1>About Page</h1>");
});

app.get("/projects", (req, res) => {
  res.status(200).send("<h1>Projects Page</h1>");
});

app.get("/contact", (req, res) => {
  res.status(200).send("<h1>Contact Page</h1>");
});

app.listen(PORT, () =>
  console.log(`Server is running in: http://localhost:${PORT}`)
);
