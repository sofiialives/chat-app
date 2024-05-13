import useGetConversations from "../../../hooks/useGetConversations";
import { RandomEmoji } from "../../../utils/emojis";
import Conversation from "./Conversation";

interface ConversationsProps {}

export interface UserProps {
  _id: string;
  email: string;
  username: string;
  profilePicture: string;
  gender: string;
}

export default function Conversations({}: ConversationsProps) {
  const { conversations, loading } = useGetConversations();
  return (
    <ul className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation: UserProps, index: number) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={RandomEmoji()}
          lastIndex={index === conversations.length - 1}
        />
      ))}
      {loading && (
        <span className="loading loading-spinner text-primary mx-auto" />
      )}
    </ul>
  );
}
