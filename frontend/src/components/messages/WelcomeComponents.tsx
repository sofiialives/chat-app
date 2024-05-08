import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../hooks/useAuthContext";
import Button from "../reusable/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Sidebar from "../home/Sidebar/Sidebar";
import { RxCross1 } from "react-icons/rx";

interface WelcomeComponentsProps {}

export default function WelcomeComponents({}: WelcomeComponentsProps) {
  const [open, setOpen] = useState(false);
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 tablet:px-6 text-lg tablet:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2 text-center">
        <Button
          className="tablet:hidden absolute top-0 btn-ghost overflow-hidden z-10"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <RxCross1 className="w-7 h-7 absolute top-2/4 right-0 -translate-x-1/2 -translate-y-1/2" />
          ) : (
            <GiHamburgerMenu className="w-7 h-7 absolute top-2/4 right-0 -translate-x-1/2 -translate-y-1/2" />
          )}
        </Button>
        {open && <Sidebar open />}
        <h1>Welcome 😎 {authUser?.username} 📸</h1>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl tablet:text-6xl text-center" />
      </div>
    </div>
  );
}
