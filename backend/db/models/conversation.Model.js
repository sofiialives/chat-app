import { Schema } from "mongoose";

const conversationSchema = new Schema(
  {
    pasricipants: [
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

const Conversation = mongoose.model("Conversation", messageSchema);
messageSchema.post("save", handleMongooseError);

export default Conversation;
