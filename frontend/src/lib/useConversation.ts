import { create } from "zustand";
import { UserProps } from "../components/home/Sidebar/Conversations";
import { MessageProps } from "../components/messages/Messages";

interface ConversationState {
  selectedConversation: UserProps | null;
  setSelectedConversation: (selectedConversation: UserProps | null) => void;
  messages: MessageProps[];
  setMessages: (messages: MessageProps[]) => void;
}

const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation: UserProps | null) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages: MessageProps[]) => set({ messages }),
}));

export default useConversation;
