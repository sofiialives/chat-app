import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Container from "./reusable/Container";
import { IoSettingsOutline } from "react-icons/io5";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const { authUser } = useAuthContext();
  return (
    <Container className="flex justify-between items-center">
      <div>Icon</div>
      <div className="flex items-center gap-2">
        <h1 className="text-3xl font-medium text-gray-200">
          {authUser?.username}
        </h1>
        <img
          src={authUser?.profilePicture}
          alt="avatar"
          width={48}
          height={48}
        />
        <Link to="/settings">
          <IoSettingsOutline className="w-12 h-12" />
        </Link>
      </div>
    </Container>
  );
}
