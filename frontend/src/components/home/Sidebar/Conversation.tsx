import useConversation from "../../../lib/useConversation";
import cn from "../../../utils/cn";
import { UserProps } from "./Conversations";

interface ConversationProps {
  conversation: UserProps;
  emoji: string;
  lastIndex: boolean;
}

export default function Conversation({
  conversation,
  emoji,
  lastIndex,
}: ConversationProps) {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={cn(
          "flex gap-2 items-center hover:bg-purple-500 rounded p-2 py-1",
          isSelected && "bg-purple-500"
        )}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePicture} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.username}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIndex && <div className="divider py-0 my-0 h-1" />}
    </>
  );
}
