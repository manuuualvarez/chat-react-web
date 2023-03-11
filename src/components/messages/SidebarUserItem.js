import React, { useContext } from 'react'
import { ChatContext } from '../../context/chat/ChatContext'
import { types } from '../../types/types';

export const SidebarUserItem = ({ user }) => {

    const { chatState, dispatch } = useContext(ChatContext);
    const { chatActive } = chatState;

    const onUserSelected = () => {
        dispatch({
            type: types.usersChatSelected,
            payload: user.uid
        });
    }

  return (
    <>
        <div 
            className={ `chat_list ${ (user.uid === chatActive) && 'active_chat' }`}
            onClick={ onUserSelected }
        >
            <div className="chat_people">
                <div className="chat_img"> 
                    <img src="https://static.vecteezy.com/system/resources/previews/013/042/571/original/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg" alt="sunil" />
                </div>
                <div className="chat_ib">
                    <h5>{ user.name }</h5>
                    {
                        (user.online) 
                            ? <span className="text-success">Online</span>
                            : <span className="text-danger">Offline</span>
                    }
                </div>
            </div>
        </div>
    </>
  )
}
