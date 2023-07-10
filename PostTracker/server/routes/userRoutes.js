import express from "express";
import { createUser, getAllUsers } from "../controllers/userControllers.js";
const router = express.Router();

// http://localhost:5000/users
router.post("/add", createUser);
// http://localhost:5000/users
router.get("/", getAllUsers);

export default router;
