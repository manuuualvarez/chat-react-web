
import React, { useContext, useEffect, createContext } from 'react';
import { useSocket } from '../hooks/useSocket'
import { types } from '../types/types';


import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from './chat/ChatContext';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online, connectSocket, disconnectSocket } = useSocket('http://localhost:8080');
    const { auth } = useContext(AuthContext);
    const { dispatch } = useContext( ChatContext)

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
            dispatch({
                type: types.usersLoaded,
                payload: users
            });
        });
    }, [socket, dispatch]);
    
    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}