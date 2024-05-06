import { useEffect } from "react";
import useConversation from "../lib/useConversation";
import { useSocketContext } from "./useSocketContext";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("new-message", (newMessage) => {
      setMessages([...messages, newMessage]);
    });
    return () => {
      socket?.off("new-message");
    };
  }, [socket, setMessages, messages]);
};

export default useListenMessages;