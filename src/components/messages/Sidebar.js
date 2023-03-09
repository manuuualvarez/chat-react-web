import React, { useContext } from 'react'
import { SidebarUserItem } from './SidebarUserItem'
import { ChatContext } from '../../context/chat/ChatContext';
import { AuthContext } from '../../auth/AuthContext';

export const Sidebar = () => {
    const { chatState } = useContext(ChatContext);
    const { auth } = useContext(AuthContext);
    const { uid } = auth;

  return (
    <>
        <div className="inbox_chat">
            {/* User Row */}
                { 
                    chatState.users
                    .filter( user => user.uid !== uid )
                    .map ( (user) => (
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
