import React from 'react'
import { hourMonth } from '../../helpers/hourMonth'

export const OutgoingMsg = ({ message }) => {
  return (
    <>
        <div className="outgoing_msg">
            <div className="sent_msg">
                <p>{ message.message }</p>
                <span className="time_date"> { hourMonth(message.createdAt) } </span>
            </div>
        </div>    
    </>
  )
}
