import express from "express";
import { getMessages, sendMessage } from "../controllers/messageController.js";
import authenticate from "../middleware/authenticate.js";
const router = express.Router();

router.get("/:id", authenticate, getMessages);
router.post("/send/:id", authenticate, sendMessage);

export default router;
