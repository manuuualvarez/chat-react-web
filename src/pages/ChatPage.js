import React, { useContext } from 'react'
import '../css/chat.css'
import { InboxPeople } from '../components/messages/InboxPeople'
import { MessageList } from '../components/messages/MessageList'
import { ChatContext } from '../context/chat/ChatContext'
import { NoChatSelected } from '../components/messages/NoChatSelected'


export const ChatPage = () => {

  const { chatState } = useContext(ChatContext);

  return (
      <div className="messaging">
        <div className="inbox_msg">
            {/* Sidebar */}
            <InboxPeople />
            {
              (chatState.chatActive) 
                ? <MessageList/>
                : <NoChatSelected/>
            }
        </div>
    </div>
  )
}
