import React from 'react'

export const SidebarUserItem = () => {
  return (
    <>
        <div className="chat_list">
        {/* active_chat */}
            <div className="chat_people">
                <div className="chat_img"> 
                    <img src="https://static.vecteezy.com/system/resources/previews/013/042/571/original/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg" alt="sunil" />
                </div>
                <div className="chat_ib">
                    <h5>Some random name</h5>
                    <span className="text-success">Online</span>
                    <span className="text-danger">Offline</span>
                </div>
            </div>
        </div>
    </>
  )
}
