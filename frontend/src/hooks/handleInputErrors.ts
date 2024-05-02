import toast from "react-hot-toast";
import { AuthProps } from "../components/AuthForm";

export function handleInputErrors({
  username,
  email,
  password,
  confirmPassword,
  gender,
}: AuthProps) {
  if (!email || !username || !password || !confirmPassword || gender) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (!password || !confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Passwords must be at least 6 characters");
    return false;
  }
}
