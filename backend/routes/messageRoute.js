import express from "express";
import { sendMessage } from "../controllers/messageController.js";
import authenticate from "../middleware/authenticate.js";
const router = express.Router();

router.post("/send/:id", authenticate, sendMessage);

export default router;
