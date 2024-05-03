import { createContext, useState } from "react";

interface AuthContextType {
  authUser: string | null;
  setAuthUser: React.Dispatch<React.SetStateAction<string | null>>;
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
  const [authUser, setAuthUser] = useState<string | null>(
    storedUser !== null ? storedUser : null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}
