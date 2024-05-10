import { SetStateAction, useEffect } from "react";
import Button from "./reusable/Button";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ children, title, setIsOpen }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsOpen]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget === event.target) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="bg-black bg-opacity-30 w-full h-full fixed top-0 left-0 z-50"
      onClick={handleBackdropClick}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-auto max-w-[90%] bg-white rounded-lg overflow-auto px-8 py-6">
        <div onClick={() => setIsOpen(false)}>Close</div>
        <div>
          <div>
            <h1>{title}</h1>
          </div>
          <div>{children}</div>
          <div>
            <Button>Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
