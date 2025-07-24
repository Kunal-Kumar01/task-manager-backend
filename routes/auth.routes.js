import express from "express";
import { register, verifyEmail } from "../controller/Auth.js";
const router = express.Router();

// router.post("/", login)
router.post("/register", register)
router.post("/verifyEmail", verifyEmail)

export default router;