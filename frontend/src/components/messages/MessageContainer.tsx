import { useEffect, useState } from "react";
import useConversation from "../../lib/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import WelcomeComponents from "./WelcomeComponents";
import Button from "../reusable/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Sidebar from "../home/Sidebar/Sidebar";

interface MessageContainerProps {}

export default function MessageContainer({}: MessageContainerProps) {
  const [open, setOpen] = useState(false);
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //cleanup
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="w-[300px] tablet:w-[480px] flex flex-col bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 relative">
      {!selectedConversation ? (
        <WelcomeComponents open={open} setOpen={setOpen} />
      ) : (
        <>
          <div className="bg-gray-300 px-4 tablet:px-6 py-3 mb-2">
            <span className="label-text">To: </span>
            <span className="label-text">{selectedConversation.username}</span>
            <Button
              className="tablet:hidden absolute top-0 right-0 w-14 btn-ghost"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <RxCross1 className="w-7 h-7" />
              ) : (
                <GiHamburgerMenu className="w-7 h-7" />
              )}
            </Button>
            {!open && <Sidebar open />}
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}
