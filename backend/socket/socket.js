import { createServer } from "node:http";
import express from "express";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

const userSocketMap = {}; //{userId: socketId}

io.on("connection", (socket) => {
  console.log(socket.id);

  const userId = socket.handshake.query.userId;
  if (userId !== "undefinde") userSocketMap[userId] = socket.id;

  io.emit("get-online-users", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("user discronnected", socket.id);
    delete userSocketMap[userId];
    io.emit("get-online-users", Object.keys(userSocketMap));
  });
});

export { app, io, server };
