import express from "express";
import authenticate from "../middleware/authenticate.js";
import {
  getUsersForSidebar,
  updateAvatar,
  updateUserInfo,
} from "../controllers/userController.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import { validateBody } from "../decorators/validateBody.js";
import { updateSchemas } from "../schemas/userSchemas.js";
import { upload } from "../middleware/upload.js";
import isEmptyBody from "../middleware/isEmptyBody.js";
const router = express.Router();

router.get("/", authenticate, ctrlWrapper(getUsersForSidebar));
router.patch(
  "/update-info",
  authenticate,
  validateBody(updateSchemas),
  isEmptyBody,
  ctrlWrapper(updateUserInfo)
);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(updateAvatar)
);

export default router;
