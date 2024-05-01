import mongoose, { Schema } from "mongoose";
import { handleMongooseError } from "../../helpers/handleMongooseError.js";

const messageSchema = new Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export const Message = mongoose.model("Message", messageSchema);
messageSchema.post("save", handleMongooseError);
