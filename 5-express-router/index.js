import {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "./controller.js";
import express from "express";
const app = express();
const PORT = 5000;

// app.get("/", (req, res) => {
//   res.status(200).send("<h1>Express server created...</h1>");
// });

app.get("/api/v1/users", getUsers);

app.get("/api/v1/users/:id", getUser);

app.post("/api/v1/users", createUser);

app.put("/api/v1/users/:id", updateUser);

app.delete("/api/v1/users/:id", deleteUser);

app.listen(PORT, () =>
  console.log(`Server is running in: http://localhost:${PORT}`)
);
