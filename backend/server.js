import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth/authRoute.js";
import logger from "morgan";
import cors from "cors";
import { connectDb } from "./db/connect.js";

dotenv.config();

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.listen(process.env.PORT, async () => {
  await connectDb();
  console.log("Server is running");
});
