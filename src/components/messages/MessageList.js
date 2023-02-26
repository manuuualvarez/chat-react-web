import React from 'react'
import { MessageInbox } from './MessageInbox'
import { IncomingMsg } from './IncomingMsg'
import { OutgoingMsg } from './OutgoingMsg'

export const MessageList = () => {

    const messages = [1,2,3,4,5,6,7,8,9,10]

  return (
    <>
        <div className="mesgs">
            <div className="msg_history">
                { messages.map( msg => (
                    (msg % 2 === 0) 
                    ? <IncomingMsg key={msg}/> 
                    : <OutgoingMsg key={msg}/>
                    ))
                }
            </div>
            {/* Textfield for message */}
            <MessageInbox/>
        </div>
    </>
  )
}
