import {
  loginUser,
  registerUser,
  userProfile,
} from "../controllers/authController.js";
import express from "express";
const router = express.Router();

// /api/v1/auth/login
// /api/v1/auth/register
// /api/v1/auth/profile

router.post("/login", loginUser);

router.post("/register", registerUser);

router.get("/profile", userProfile);

export default router;
