import { useAuthContext } from "../../hooks/useAuthContext";
import useConversation from "../../lib/useConversation";
import { extractTime } from "../../utils/extractTime";
import { MessageProps } from "./Messages";

export interface OneMessageProps {
  message: MessageProps;
}

export default function Message({ message }: OneMessageProps) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const myMessage = message.senderId === authUser?._id;

  const chatClassName = myMessage ? "chat-end" : "chat-start";
  const profilePicture = myMessage
    ? authUser?.profilePicture
    : selectedConversation?.profilePicture;
  const bubbleBgColor = myMessage ? "bg-purple-500" : "bg-gray-300";
  const textColor = myMessage ? "text-white" : "text-black";
  const formattedDate = extractTime(message.createdAt);
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePicture} alt="User avatar" />
        </div>
      </div>
      <div className={`chat-bubble ${textColor} ${bubbleBgColor} pb-2`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedDate}
      </div>
    </div>
  );
}
