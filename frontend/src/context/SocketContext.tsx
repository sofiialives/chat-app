import React, { createContext, useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { io, Socket } from "socket.io-client";

interface SocketContextProps {
  children: React.ReactNode;
}

interface SocketContextValue {
  socket: Socket | null;
  onlineUsers: string[];
}

export const SocketContext = createContext<SocketContextValue>({
  socket: null,
  onlineUsers: [],
});

export default function SocketContextProvider({
  children,
}: SocketContextProps) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const newSocket = io("http://localhost:5000", {
        query: { userId: authUser._id },
      });
      setSocket(newSocket);

      newSocket.on("get-online-users", (users) => {
        setOnlineUsers(users);
      });
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }

    return () => {
      if (socket) {
        socket.close();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
}
