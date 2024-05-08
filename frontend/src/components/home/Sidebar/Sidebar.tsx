import { BiLogOut } from "react-icons/bi";
import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
import useLogout from "../../../hooks/useLogout";
import cn from "../../../utils/cn";
import { Dispatch } from "react";

interface SidebarProps {
  open?: boolean;
  setOpen?: Dispatch<React.SetStateAction<boolean>> | undefined;
}

export default function Sidebar({ open }: SidebarProps) {
  const { logout, loading } = useLogout();
  return (
    <div
      className={cn(
        "mobile:hidden tablet:block bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-r border-gray-300 py-4 tablet:py-6 px-4 tablet:px-6 flex flex-col w-[100px] tablet:w-[320px]",
        open &&
          "absolute top-0 left-0 w-[70%] h-full translate-x-0 mobile:block z-10"
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
