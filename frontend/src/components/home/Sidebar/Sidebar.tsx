import { BiLogOut } from "react-icons/bi";
import Conversations from "./Conversations";
import SearchInput from "./SearchInput";

interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  return (
    <div className="border-r border-gray-300 py-4 tablet:py-6 px-4 tablet:px-6 flex flex-col ">
      <SearchInput />
      <div className="divider px-3" />
      <Conversations />
      <div className="mt-auto">
        <BiLogOut className="w-4 h-4 tablet:w-6 tablet:h-6 text-gray-300 cursor-pointer" />
      </div>
    </div>
  );
}
