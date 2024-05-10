import { ChangeEvent, useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import TextField from "../../reusable/TextField";
import { BsArrowUp } from "react-icons/bs";
import toast from "react-hot-toast";

interface AvatarFormProps {
  setFile: (file: File) => void;
}

export default function AvatarForm({ setFile }: AvatarFormProps) {
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const { authUser } = useAuthContext();

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const selectedFile = files[0];
      const fileSize = selectedFile.size / 1024 / 1024;
      const maxFileSize = 10;

      if (fileSize > maxFileSize) {
        toast.error("The file is too large. Maximum allowed size is 10MB");
        return;
      }

      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setPreviewURL(reader.result as string);
        }
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  return (
    <div>
      <h1>Your Profile Photo</h1>
      <label>
        <img
          src={previewURL ? previewURL : authUser?.profilePicture}
          className="w-20 h-20"
          alt="User avatar"
        />
        <TextField
          variant="modal"
          type="file"
          accept=".jpeg,.jpg,.png,.webp"
          onChange={onChangeFile}
        />
        <BsArrowUp />
        {/* {loading && (
          <span className="loading loading-spinner text-primary mx-auto" />
        )} */}
      </label>
    </div>
  );
}
