import React from 'react'
import { SidebarUserItem } from './SidebarUserItem'

export const Sidebar = () => {
    const chats = [1,2,3,4,5,6,7,8,9,10]
  return (
    <>

        <div className="inbox_chat">
            {/* User Row */}
       { 
            chats.map ( (chat) => (
                <SidebarUserItem key={chat}/>
            ))
        }
            {/* <!-- Extra space to scroll --> */}
            <div className="extra_space"></div>
        </div>
    </>
  )
}
