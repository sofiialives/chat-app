import { ChangeEvent, useState } from "react";
import TextField from "../../reusable/TextField";
import toast from "react-hot-toast";

interface AvatarFormProps {
  setFile: (file: File) => void;
  file: string;
}

export default function AvatarForm({ setFile, file }: AvatarFormProps) {
  const [previewURL, setPreviewURL] = useState<string | null>(null);

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
          src={previewURL ? previewURL : file}
          className="w-20 h-20"
          alt="User avatar"
        />
        <TextField
          variant="modal"
          type="file"
          accept=".jpeg,.jpg,.png,.webp"
          onChange={onChangeFile}
        />
      </label>
    </div>
  );
}
