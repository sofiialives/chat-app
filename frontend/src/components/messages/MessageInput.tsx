import { BsSend } from "react-icons/bs";
import Button from "../reusable/Button";
import TextField from "../reusable/TextField";

interface MessageInputProps {}

export default function MessageInput({}: MessageInputProps) {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <TextField variant="message" placeholder="Send a message" />
        <Button type="submit" variant="message">
          <BsSend className="w-4 h-4 tablet:w-6 tablet:h-6 text-gray-300" />
        </Button>
      </div>
    </form>
  );
}
