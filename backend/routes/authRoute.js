import express from "express";
import { login, logout, signup } from "../controllers/authController.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import { validateBody } from "../decorators/validateBody.js";
import { schemas } from "../schemas/authSchema.js";

const router = express.Router();

router.post(
  "/signup",
  validateBody(schemas.registerSchema),
  ctrlWrapper(signup)
);
router.post("/login", validateBody(schemas.loginSchema), ctrlWrapper(login));
router.post("/logout", ctrlWrapper(logout));

export default router;
