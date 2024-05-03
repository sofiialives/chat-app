import { useState } from "react";
import toast from "react-hot-toast";
import { AuthProps } from "../components/AuthForm";
import { handleInputErrors } from "./handleInputErrors";
import { useAuthContext } from "./useAuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    email,
    username,
    password,
    confirmPassword,
    gender,
  }: AuthProps) => {
    const success = handleInputErrors({
      email,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          username,
          password,
          confirmPassword,
          gender,
        }),
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

  return { loading, signup };
};
export default useSignup;
