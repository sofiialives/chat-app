import { useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import AvatarForm from "./AvatarForm";
import GenderCheckbox from "../../GenderCheckbox";
import TextField from "../../reusable/TextField";

interface ModalSettingsProps {}

export default function ModalSettings({}: ModalSettingsProps) {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    gender: "",
    password: "",
    newPassword: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const { authUser } = useAuthContext();
  const handleCheckboxChange = (gender: string) => {
    setInputs({ ...inputs, gender });
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 tablet:flex-row tablet:gap-10 desktop:gap-16"
    >
      <div>
        <AvatarForm setFile={setFile} />
        <GenderCheckbox
          onCheckboxChange={handleCheckboxChange}
          selectedGenre={inputs.gender}
        />
      </div>
      <div>
        <TextField label="Username" variant="modal" />
        <TextField type="email" label="Email" variant="modal" disabled />
        <TextField type="password" label="Password" variant="modal" />
        <TextField type="password" label="New Password" variant="modal" />
      </div>
    </form>
  );
}
