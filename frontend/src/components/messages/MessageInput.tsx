import { BsSend } from "react-icons/bs";
import Button from "../reusable/Button";
import TextField from "../reusable/TextField";
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";

interface MessageInputProps {}

export default function MessageInput({}: MessageInputProps) {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <TextField
          variant="message"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" variant="message">
          {loading ? (
            <span className="loading loading-spinner text-primary" />
          ) : (
            <BsSend
              type="submit"
              className="w-4 h-4 tablet:w-6 tablet:h-6 text-gray-300"
            />
          )}
        </Button>
      </div>
    </form>
  );
}
