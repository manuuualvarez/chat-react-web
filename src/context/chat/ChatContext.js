import React, { useReducer } from 'react'
import { createContext } from "react";
import { chatReducer } from './chatReducer';

export const ChatContext = createContext();

const initialState = {
    uid: '', // UID of the user
    chatActive: null, // UID of usuario to send a message
    users: [], // All users of the database
    messages: [] // Messages of the chat active
}

export const ChatProvider = ({ children }) => {

    const [chatState, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider value={{
        chatState,
        dispatch
    }}>
        { children }
    </ChatContext.Provider>
  )
}
