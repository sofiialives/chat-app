import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import toast from "react-hot-toast";

const useUploadAvatar = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const uploadAvatar = async (profilePicture: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/users/avatars", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          profilePicture,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.eror);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, uploadAvatar };
};

export default useUploadAvatar;
