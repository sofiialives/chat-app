import { useEffect, useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import AvatarForm from "./AvatarForm";
import GenderCheckbox from "../../GenderCheckbox";
import TextField from "../../reusable/TextField";
import useUpdateUser from "../../../hooks/useUpdateUser";
import Button from "../../reusable/Button";
import useUploadAvatar from "../../../hooks/useUploadAvatar";

interface ModalSettingsProps {}

export default function ModalSettings({}: ModalSettingsProps) {
  const { authUser } = useAuthContext();
  const [inputs, setInputs] = useState({
    username: authUser?.username || "",
    email: authUser?.email || "",
    gender: authUser?.gender || "",
    password: "",
    newPassword: "",
    profilePicture: authUser?.profilePicture || "",
  });
  const [file, setFile] = useState<File | null>(null);
  const { updateUser, loading } = useUpdateUser();
  const { uploadAvatar } = useUploadAvatar();
  const handleCheckboxChange = (gender: string) => {
    setInputs({ ...inputs, gender });
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await updateUser(inputs);
    await uploadAvatar(file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 tablet:flex-row tablet:gap-10 desktop:gap-16"
    >
      <div>
        <AvatarForm setFile={setFile} file={inputs.profilePicture} />
        <GenderCheckbox
          onCheckboxChange={handleCheckboxChange}
          selectedGenre={inputs.gender}
        />
      </div>
      <div>
        <TextField
          label="Username"
          variant="modal"
          name="username"
          value={inputs.username}
          onChange={handleInputChange}
          autoComplete="username"
        />
        <TextField
          type="email"
          label="Email"
          variant="modal"
          disabled
          name="email"
          value={inputs.email}
          autoComplete="email"
        />
        <TextField
          type="password"
          label="Password"
          variant="modal"
          name="password"
          value={inputs.password}
          onChange={handleInputChange}
          autoComplete="current-password"
        />
        <TextField
          type="password"
          label="New Password"
          variant="modal"
          name="newPassword"
          value={inputs.newPassword}
          onChange={handleInputChange}
          autoComplete="new-password"
        />
      </div>
      <Button type="submit" disabled={loading}>
        {loading && <span className="loading loading-spinner text-primary" />}
        Save
      </Button>
    </form>
  );
}
