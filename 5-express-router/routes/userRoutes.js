import {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

import express from "express";
const router = express.Router();

// /api/v1/users
// router.get("/", getUsers);

// /api/v1/users/:id
// router.get("/:id", getUser);

// /api/v1/users
// router.post("/", createUser);

// /api/v1/users/:id
// router.put("/:id", updateUser);

// /api/v1/users/:id
// router.delete("/:id", deleteUser);

// chaining of routes
router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default router;
