interface ConversationProps {}

export default function Conversation({}: ConversationProps) {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-purple-500 rounded p-2 py-1">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="/images/photo_2023-02-22_01-02-15.jpg" alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">Sofiia</p>
            <span className="text-xl">❤️</span>
          </div>
        </div>
      </div>
      <div className="divider py-0 my-0 h-1" />
    </>
  );
}
