import express from "express";
const app = express();
const PORT = 5000;

app.use(express.static("../client"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Base Page
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome, Express</h1>");
});

// Create User
app.post("/user/create", (req, res) => {
  res.status(201).json({ success: true, message: "User added successfully" });
});

app.listen(PORT, () =>
  console.log(`Server is running in: http://localhost:${PORT}`)
);
