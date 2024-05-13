import { useAuthContext } from "../../hooks/useAuthContext";
import Container from "../reusable/Container";
import { IoSettingsOutline } from "react-icons/io5";
import Modal from "../Modal";
import { useState } from "react";
import ModalSettings from "./modal/ModalSettings";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
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
          className="tablet:w-16 tablet:h-16 rounded-full"
        />
        <IoSettingsOutline
          className="w-10 h-10 tablet:w-16 tablet:h-16 text-gray-300"
          onClick={() => setIsOpen(true)}
        />
        {isOpen && (
          <Modal setIsOpen={setIsOpen} title="User Settings" open={isOpen}>
            <ModalSettings />
          </Modal>
        )}
      </div>
    </Container>
  );
}
