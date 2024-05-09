import { BsSend } from "react-icons/bs";
import Button from "../reusable/Button";
import TextField from "../reusable/TextField";
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";
import EmojiPicker from "emoji-picker-react";
import { RiEmojiStickerLine } from "react-icons/ri";

interface MessageInputProps {}

export default function MessageInput({}: MessageInputProps) {
  const [message, setMessage] = useState("");
  const [openEmoji, setOpenEmoji] = useState(false);
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  const handleEmojiClick = ({ emoji }: { emoji: string }) =>
    setMessage((prevMessage) => `${prevMessage}${emoji}`);
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <TextField
          variant="message"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type="button"
          variant="message"
          onClick={() => setOpenEmoji(!openEmoji)}
          className="mr-10 w-[58px] h-[48px]"
        >
          <RiEmojiStickerLine className="w-6 h-6 text-gray-300" />
        </Button>
        <Button type="submit" variant="message" className="w-[58px] h-[48px]">
          {loading ? (
            <span className="loading loading-spinner text-primary" />
          ) : (
            <BsSend type="submit" className="w-6 h-6 text-gray-300" />
          )}
        </Button>
      </div>
      {openEmoji && (
        <div className="absolute top-0 left-0 z-1">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </form>
  );
}
