"use client";

import React, { createContext, useContext, useEffect } from "react";
import { io, Socket } from "socket.io-client";

// Define the API URL (with fallback)
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Define the SocketContext with a nullable Socket type
const SocketContext = createContext<Socket | null>(null);

// Define the SocketProvider props
interface SocketProviderProps {
    children: React.ReactNode;
}

// SocketProvider Component
export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
    const socket: Socket = io(API_URL);

    useEffect(() => {
        // Clean up the socket connection when the provider unmounts
        return () => {
            socket.disconnect();
        };
    }, [socket]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

// Custom Hook to use the SocketContext
export const useSocket = (): Socket | null => {
    return useContext(SocketContext);
};
