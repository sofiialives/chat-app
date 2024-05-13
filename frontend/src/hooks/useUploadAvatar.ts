import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "./useAuthContext";

const useUploadAvatar = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const uploadAvatar = async (file: File | null) => {
    setLoading(true);
    try {
      const formData = new FormData();
      if (file) {
        formData.append("avatar", file);
      }

      const res = await fetch("/api/users/avatars", {
        method: "PATCH",
        body: formData,
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      const chatUserData = JSON.parse(
        localStorage.getItem("chat-user") || "{}"
      );

      localStorage.setItem(
        "chat-user",
        JSON.stringify({ ...chatUserData, ...data })
      );
      setAuthUser({ ...chatUserData, ...data });
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, uploadAvatar };
};

export default useUploadAvatar;
