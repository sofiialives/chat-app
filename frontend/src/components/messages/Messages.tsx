import Message from "./Message";

interface MessagesProps {}

export default function Messages({}: MessagesProps) {
  return (
    <div className="px-4 tablet:px-6 flex-1 overflow-auto max-h-[80vh]">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}
