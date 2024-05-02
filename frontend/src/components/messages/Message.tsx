interface MessageProps {}

export default function Message({}: MessageProps) {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="/images/photo_2023-02-22_01-02-15.jpg" alt="user avatar" />
        </div>
      </div>
      <div className="chat-bubble text-white bg-purple-500">Helllo</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:42
      </div>
    </div>
  );
}
