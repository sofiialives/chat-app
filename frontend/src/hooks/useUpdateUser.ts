import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "./useAuthContext";

interface UserDataToUpdate {
  username?: string;
  password?: string;
  newPassword?: string;
  gender?: string;
}

const useUpdateUser = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const updateUser = async ({
    username,
    password,
    gender,
    newPassword,
  }: UserDataToUpdate) => {
    const dataToUpdate: UserDataToUpdate = {
      username,
      gender,
    };

    const success = handleInputErrors({ password, newPassword });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/users/update-info", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToUpdate),
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
        JSON.stringify({ ...chatUserData, ...dataToUpdate })
      );
      setAuthUser({ ...chatUserData, ...dataToUpdate });
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, updateUser };
};

export default useUpdateUser;

function handleInputErrors({ newPassword, password }: UserDataToUpdate) {
  if (password && newPassword === password) {
    toast.error("Fill in new password");
    return false;
  }
  return true;
}
