import React, { useContext } from 'react'
import { MessageInbox } from './MessageInbox'
import { IncomingMsg } from './IncomingMsg'
import { OutgoingMsg } from './OutgoingMsg'
import { ChatContext } from '../../context/chat/ChatContext'
import { AuthContext } from '../../auth/AuthContext'

export const MessageList = () => {

    const { chatState } = useContext(ChatContext);
    const { auth } = useContext(AuthContext);
    const { messages } = chatState;

    
  return (
    <>
        <div className="mesgs">
            <div 
                // For autosroll
                id="msg-scroll"
                className="msg_history"
            >
                { messages.map( msg => (
                    (msg.from === auth.uid) 
                        ? <OutgoingMsg message ={ msg } key={msg._id}/> 
                        : <IncomingMsg message ={ msg } key={msg._id}/> 
                    ))
                }
            </div>
            {/* Textfield for message */}
            <MessageInbox/>
        </div>
    </>
  )
}
