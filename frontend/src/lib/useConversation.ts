import { create } from "zustand";
import { UserProps } from "../components/home/Sidebar/Conversations";

interface ConversationState {
  selectedConversation: UserProps | null;
  setSelectedConversation: (selectedConversation: UserProps | null) => void;
  messages: string[];
  setMessages: (messages: string[]) => void;
}

const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation: UserProps | null) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages: string[]) => set({ messages }),
}));

export default useConversation;
