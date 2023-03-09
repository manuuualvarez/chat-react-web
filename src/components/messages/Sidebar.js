import React, { useContext } from 'react'
import { SidebarUserItem } from './SidebarUserItem'
import { ChatContext } from '../../context/chat/ChatContext';

export const Sidebar = () => {
    const { chatState } = useContext(ChatContext);

  return (
    <>
        <div className="inbox_chat">
            {/* User Row */}
       { 
            chatState.users.map ( (user) => (
                <SidebarUserItem 
                    key={user.uid}
                    user= { user }
                />
            ))
        }
            {/* <!-- Extra space to scroll --> */}
            <div className="extra_space"></div>
        </div>
    </>
  )
}
