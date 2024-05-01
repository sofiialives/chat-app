import mongoose, { Schema } from "mongoose";
import { handleMongooseError } from "../../helpers/handleMongooseError.js";

const conversationSchema = new Schema(
  {
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

export const Conversation = mongoose.model("Conversation", conversationSchema);
conversationSchema.post("save", handleMongooseError);
