import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Container from "./reusable/Container";
import { IoSettingsOutline } from "react-icons/io5";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const { authUser } = useAuthContext();
  return (
    <Container className="flex justify-between items-center py-3">
      <div className="flex gap-2 items-center">
        <img
          src="/images/icon.png"
          alt="app icon"
          className="w-8 h-12 tablet:w-14 tablet:h-20"
        />
        <h1 className="text-purple-300 text-xl tablet:text-3xl font-medium">
          Lives Chat App
        </h1>
      </div>
      <div className="flex items-center gap-1 tablet:gap-3">
        <img
          src={authUser?.profilePicture}
          alt="avatar"
          width={40}
          height={40}
          className="tablet:w-12 tablet:h-12"
        />
        <Link to="/settings">
          <IoSettingsOutline className="w-10 h-10 tablet:w-12 tablet:h-12 text-gray-300" />
        </Link>
      </div>
    </Container>
  );
}
