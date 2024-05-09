import { BiLogOut } from "react-icons/bi";
import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
import useLogout from "../../../hooks/useLogout";
import cn from "../../../utils/cn";
import { Dispatch, useEffect, useRef } from "react";

interface SidebarProps {
  open?: boolean;
  setOpen?: Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const { logout, loading } = useLogout();
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (
        setOpen &&
        typeof setOpen === "function" &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    });
  }, [setOpen]);

  return (
    <div
      ref={sidebarRef}
      className={cn(
        "mobile:hidden tablet:block bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-r border-gray-300 py-4 tablet:py-6 px-4 tablet:px-6 flex flex-col w-[100px] tablet:w-[320px]",
        open &&
          "absolute top-0 left-0 w-[70%] h-full translate-x-0 mobile:block tablet:hidden z-10"
      )}
    >
      <SearchInput />
      <div className="divider px-3" />
      <Conversations />
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-gray-300 cursor-pointer absolute bottom-4"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner text-primary" />
      )}
    </div>
  );
}
