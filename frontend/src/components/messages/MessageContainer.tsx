import MessageInput from "./MessageInput";
import Messages from "./Messages";

interface MessageContainerProps {}

export default function MessageContainer({}: MessageContainerProps) {
  return (
    <div className="tablet:w-[480px] flex flex-col">
      <div className="bg-gray-300 px-4 tablet:px-6 py-2 mb-2">
        <span className="label-text">To: </span>
        <span className="label-text">Sofiika Karpova</span>
      </div>
      <Messages />
      <MessageInput />
    </div>
  );
}
