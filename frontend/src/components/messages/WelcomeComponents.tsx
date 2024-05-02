import { TiMessages } from "react-icons/ti";

interface WelcomeComponentsProps {}

export default function WelcomeComponents({}: WelcomeComponentsProps) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 tablet:px-6 text-lg tablet:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2 text-center">
        <h1>Welcome 📸😎 Sofiika Karpova</h1>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl tablet:text-6xl text-center" />
      </div>
    </div>
  );
}
