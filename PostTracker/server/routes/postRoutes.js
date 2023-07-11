import express from "express";
import {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
} from "../controllers/postControllers.js";
const router = express.Router();

// http://localhost:5000/posts/add
router.post("/add", createPost);
// http://localhost:5000/posts
router.get("/", getAllPosts);
// http://localhost:5000/posts/:id
router.get("/:id", getSinglePost);
// http://localhost:5000/posts/:id
router.put("/:id", updatePost);
// http://localhost:5000/posts/:id
router.delete("/:id", deletePost);

export default router;
