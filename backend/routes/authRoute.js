import express from "express";
import { login, logout, signup } from "../controllers/authController.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";

const router = express.Router();

router.post("/signup", ctrlWrapper(signup));
router.post("/login", ctrlWrapper(login));
router.post("/logout", ctrlWrapper(logout));

export default router;
