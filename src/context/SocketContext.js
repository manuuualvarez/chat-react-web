
import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { useSocket } from '../hooks/useSocket'
import { AuthContext } from '../auth/AuthContext';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online, connectSocket, disconnectSocket } = useSocket('http://localhost:8080');
    const { auth } = useContext(AuthContext);

    // Auth Login Effect
    useEffect(() => {
        if(auth.logged){
            connectSocket();
        }
    }, [auth, connectSocket]);
    // Auth Logout Effect
    useEffect(() => {
        if(!auth.logged){
            disconnectSocket();
        }
    }, [auth, disconnectSocket]);
    // Sockets Effect: Listen changes in online users
    useEffect(() => {
        socket?.on('active-users', (users) => {
            console.log(users);
        });
    }, [socket]);
    
    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}