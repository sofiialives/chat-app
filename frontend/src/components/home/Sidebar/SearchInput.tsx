import TextField from "../../reusable/TextField";
import Button from "../../reusable/Button";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import useConversation from "../../../lib/useConversation";
import useGetConversations from "../../../hooks/useGetConversations";
import { UserProps } from "./Conversations";
import toast from "react-hot-toast";

interface SearchInputProps {}

export default function SearchInput({}: SearchInputProps) {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!search) return;
    const conversation = conversations.find((conversation: UserProps) =>
      conversation.username.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSearch}>
      <TextField
        placeholder="Search..."
        variant="sidebar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="submit" variant="sidebar">
        <IoSearchSharp className="w-4 h-4 tablet:w-6 tablet:h-6" />
      </Button>
    </form>
  );
}
