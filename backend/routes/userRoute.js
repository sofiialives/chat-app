import express from "express";
import authenticate from "../middleware/authenticate.js";
import {
  getUsersForSidebar,
  updateUserInfo,
} from "../controllers/userController.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
const router = express.Router();

router.get("/", authenticate, ctrlWrapper(getUsersForSidebar));
router.patch("/", authenticate, ctrlWrapper(updateUserInfo));

export default router;
