import React from 'react'
import '../css/chat.css'
import { InboxPeople } from '../components/messages/InboxPeople'
import { MessageList } from '../components/messages/MessageList'


export const ChatPage = () => {
  return (
      <div className="messaging">
        <div className="inbox_msg">
            {/* Sidebar */}
            <InboxPeople />
            {/* List of Messages */}
            <MessageList/>
        </div>


    </div>
  )
}
