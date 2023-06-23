import express from "express";
let app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Express.js</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>About Page</h1>");
});

app.get("/projects", (req, res) => {
  res.status(200).send("<h1>Projects Page</h1>");
});

app.get("*", (req, res) => {
  res.status(404).json({ message: "page not found" });
});

// app.post()
// app.put()
// app.patch()
// app.delete()
// app.use() => adding middleware into our application

app.listen(PORT, () =>
  console.log(`The server is running in: http://localhost:${PORT}`)
);
