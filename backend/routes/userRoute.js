import express from "express";
import authenticate from "../middleware/authenticate.js";
import {
  getUsersForSidebar,
  updateUserInfo,
} from "../controllers/userController.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import { validateBody } from "../decorators/validateBody.js";
import { updateSchemas } from "../schemas/userSchemas.js";
import isEmptyBody from "../middleware/isEmptyBody.js";
const router = express.Router();

router.get("/", authenticate, ctrlWrapper(getUsersForSidebar));
router.patch(
  "/",
  authenticate,
  validateBody(updateSchemas),
  isEmptyBody,
  ctrlWrapper(updateUserInfo)
);

export default router;
