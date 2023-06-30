import express from "express";
import { users } from "./data.js";
const app = express();
const PORT = 5000;

app.use(express.json());

// http methods (CRUD => Create, Read, Update, Delete)
// 1. GET - Read
// 2. POST - Create
// 3. PUT/PATCH - Update
// 4. DELETE - Delete

// GET
// Getting all the users
app.get("/api/users", (req, res) => {
  res.status(200).json({ message: "success", data: users });
});

// Get single user
app.get("/api/users/:userID", (req, res) => {
  const { userID } = req.params;
  const singleUser = users.find((user) => user.id === Number(userID));
  if (!singleUser) {
    return res
      .status(200)
      .json({ message: "success", data: `No user with the id: ${userID}` });
  } else {
    res.status(200).json({
      message: `User with the id: ${userID} is retrived successfully`,
      data: singleUser,
    });
  }
});

// POST
// Create a User
// id, name, age, city
app.post("/api/users/create", (req, res) => {
  //   console.log(req.body);
  const { id, name, age, city } = req.body;
  if (!(id && name && age && city)) {
    return res.status(400).json({ message: "Something went wrong" });
  } else {
    return res.status(200).json({
      message: `User with the id: ${id} is created succesfully`,
      data: req.body,
    });
  }
});

// PUT
// Update user
app.put("/api/users/:userID", (req, res) => {
  const { userID } = req.params;
  const { id, name, age, city } = req.body;
  const user = users.find((user) => user.id === Number(userID));
  if (!user) {
    return res
      .status(200)
      .json({ message: "success", data: `No user with the id: ${userID}` });
  } else {
    const newUsers = users.map((user) => {
      if (user.id === Number(userID)) {
        (user.id = Number(userID)),
          (user.name = name),
          (user.age = age),
          (user.city = city);
      }
      return user;
    });
    return res.status(200).json({
      message: `User with the id: ${id} is updated successfully`,
      data: newUsers,
    });
  }
});

// DELETE
// Delete User
app.delete("/api/users/:userID", (req, res) => {
  const { userID } = req.params;
  const user = users.find((user) => user.id === Number(userID));
  if (!user) {
    return res
      .status(200)
      .json({ message: "success", data: `No user with the id: ${userID}` });
  } else {
    let newUsers = users.filter((user) => user.id !== Number(userID));
    return res.status(200).json({
      message: `User with the id: ${userID} is deleted successfully`,
      data: newUsers,
    });
  }
});

app.listen(PORT, () =>
  console.log(`Server is running in: http://localhost:${PORT}`)
);
