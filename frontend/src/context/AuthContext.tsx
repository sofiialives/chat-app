import { createContext, useState } from "react";
import { UserProps } from "../components/home/Sidebar/Conversations";

interface AuthContextType {
  authUser: UserProps | null;
  setAuthUser: React.Dispatch<React.SetStateAction<UserProps | null>>;
}

export const AuthContext = createContext<AuthContextType>({
  authUser: null,
  setAuthUser: () => {},
});

interface AuthContextProps {
  children: React.ReactNode;
}

export default function AuthContextProvider({ children }: AuthContextProps) {
  const storedUser = localStorage.getItem("chat-user");
  const initialAuthUser = storedUser ? JSON.parse(storedUser) : null;
  const [authUser, setAuthUser] = useState<UserProps | null>(initialAuthUser);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}
