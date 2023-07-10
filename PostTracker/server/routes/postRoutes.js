import express from "express";
import {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
} from "../controllers/postControllers.js";
const router = express.Router();

// http://localhost:5000/users/add
router.post("/add", createPost);
// http://localhost:5000/users
router.get("/", getAllPosts);
// http://localhost:5000/users/:id
router.get("/:id", getSinglePost);
// http://localhost:5000/users/:id
router.put("/:id", updatePost);
// http://localhost:5000/users/:id
router.delete("/:id", deletePost);

export default router;
