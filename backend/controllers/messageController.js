import { Conversation } from "../db/models/conversationModel.js";
import { Message } from "../db/models/messageModel.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  const { message } = req.body;
  const { id: receiverId } = req.params;
  const { _id: senderId } = req.user;

  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });
  if (!conversation) {
    conversation = await Conversation.create({
      participants: [senderId, receiverId],
    });
  }

  const newMessage = new Message({
    senderId,
    receiverId,
    message,
  });

  if (newMessage) conversation.messages.push(newMessage._id);

  // will run in parallel
  await Promise.all([conversation.save(), newMessage.save()]);

  const receiverSocketId = getReceiverSocketId(receiverId);
  if (receiverSocketId) {
    io.to(receiverSocketId).emit("new-message", newMessage);
  }

  res.status(201).json(newMessage);
};

export const getMessages = async (req, res) => {
  const { id: userToChatId } = req.params;
  const { _id: senderId } = req.user;

  const conversation = await Conversation.findOne({
    participants: { $all: [senderId, userToChatId] },
  }).populate("messages");

  if (!conversation) res.status(200).json([]);

  const messages = conversation.messages;

  res.json(messages);
};
