import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import toast from "react-hot-toast";

const useUpdateUser = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const updateUser = async ({
    username,
    password,
    gender,
    newPassword,
  }: {
    username: string;
    password: string;
    gender: string;
    newPassword: string;
  }) => {
    const success = handleInputErrors({ password, newPassword });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/users/update-info", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, newPassword, gender }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, updateUser };
};

export default useUpdateUser;

function handleInputErrors({
  newPassword,
  password,
}: {
  newPassword: string;
  password: string;
}) {
  if (newPassword === password) {
    toast.error("Fill in new password");
    return false;
  }

  return true;
}
