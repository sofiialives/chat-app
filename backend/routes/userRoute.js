import express from "express";
import authenticate from "../middleware/authenticate.js";
import {
  getUsersForSidebar,
  updateUserInfo,
} from "../controllers/userController.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import isEmptyBody from "../middleware/isEmptyBody.js";
const router = express.Router();

router.get("/", authenticate, ctrlWrapper(getUsersForSidebar));
router.patch("/", authenticate, isEmptyBody, ctrlWrapper(updateUserInfo));

export default router;
