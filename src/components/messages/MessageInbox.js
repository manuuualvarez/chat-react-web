import React, { useContext, useState } from 'react'
import { SocketContext } from '../../context/SocketContext';
import { AuthContext } from '../../auth/AuthContext';
import { ChatContext } from '../../context/chat/ChatContext';

export const MessageInbox = () => {

    const [message, setMessage] = useState('');
    const { auth } = useContext(AuthContext);
    const { socket } = useContext(SocketContext);
    const { chatState } = useContext(ChatContext);


    const onChange = ({ target }) => {
        setMessage( target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // Check the message is not empty
        if ( message.length === 0) { return };
        // Emit the socket event to send the message
        socket.emit('personal-message', {
            from: auth.uid,
            to: chatState.chatActive,
            message
        });
        setMessage('');
    }


  return (
    <>
        <form
            onSubmit={ onSubmit }
        >
            <div className="type_msg row">
                <div className="input_msg_write col-sm-9">
                    <input 
                        type="text" 
                        className="write_msg" 
                        placeholder="Write your message..." 
                        value={ message }
                        onChange={ onChange }
                    />
                </div>
                <div className="col-sm-3 text-center">
                    <button 
                        className="msg_send_btn mt-3" 
                        type="submit"
                        disabled={ message.length === 0 }
                    >
                        Send
                    </button>
                </div>
            </div>
        </form>
    </>
  )
}
