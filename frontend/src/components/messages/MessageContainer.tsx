import { useEffect } from "react";
import useConversation from "../../lib/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import WelcomeComponents from "./WelcomeComponents";
import Button from "../reusable/Button";
import { GiHamburgerMenu } from "react-icons/gi";

interface MessageContainerProps {}

export default function MessageContainer({}: MessageContainerProps) {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //cleanup
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="tablet:w-[480px] flex flex-col bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 relative">
      {!selectedConversation ? (
        <WelcomeComponents />
      ) : (
        <>
          <div className="bg-gray-300 px-4 tablet:px-6 py-2 mb-2">
            <span className="label-text">To: </span>
            <span className="label-text">{selectedConversation.username}</span>
            <Button className="tablet:hidden absolute top-0 btn-ghost">
              <GiHamburgerMenu className="w-6 h-6" />
            </Button>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}
