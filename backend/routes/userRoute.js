import express from "express";
import authenticate from "../middleware/authenticate.js";
import { getUsersForSidebar } from "../controllers/userController.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
const router = express.Router();

router.get("/", authenticate, ctrlWrapper(getUsersForSidebar));

export default router;
