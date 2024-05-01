import express from "express";
import { getMessages, sendMessage } from "../controllers/messageController.js";
import authenticate from "../middleware/authenticate.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
const router = express.Router();

router.get("/:id", authenticate, ctrlWrapper(getMessages));
router.post("/send/:id", authenticate, ctrlWrapper(sendMessage));

export default router;
