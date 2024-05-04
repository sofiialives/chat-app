import { useEffect } from "react";
import useConversation from "../../lib/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import WelcomeComponents from "./WelcomeComponents";

interface MessageContainerProps {}

export default function MessageContainer({}: MessageContainerProps) {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //cleanup
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="tablet:w-[480px] flex flex-col">
      {!selectedConversation ? (
        <WelcomeComponents />
      ) : (
        <>
          <div className="bg-gray-300 px-4 tablet:px-6 py-2 mb-2">
            <span className="label-text">To: </span>
            <span className="label-text">{selectedConversation.username}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}
