import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "./useAuthContext";

const useUploadAvatar = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const uploadAvatar = async (file: File | null) => {
    setLoading(true);
    try {
      const res = await fetch("/api/users/avatars", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profilePicture: file }),
      });

      if (!res.ok) {
        throw new Error("Failed to upload avatar");
      }

      const data = await res.json();
      const chatUserData = JSON.parse(
        localStorage.getItem("chat-user") || "{}"
      );

      setAuthUser({ ...chatUserData, data });
      toast.success("Avatar uploaded successfully");
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, uploadAvatar };
};

export default useUploadAvatar;
