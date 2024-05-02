import Conversation from "./Conversation";

interface ConversationsProps {}

export default function Conversations({}: ConversationsProps) {
  return (
    <ul className="py-2 flex flex-col overflow-auto">
      <li>
        <Conversation />
      </li>
      <li>
        <Conversation />
      </li>
      <li>
        <Conversation />
      </li>
      <li>
        <Conversation />
      </li>
      <li>
        <Conversation />
      </li>
    </ul>
  );
}
