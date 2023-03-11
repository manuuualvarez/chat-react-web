import React from 'react'
import { hourMonth } from '../../helpers/hourMonth'

export const IncomingMsg = ({ message }) => {
  return (
    <>                
        <div className="incoming_msg">
            <div className="incoming_msg_img">
                <img src="https://static.vecteezy.com/system/resources/previews/013/042/571/original/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg" alt="sunil" />
            </div>
            <div className="received_msg">
                <div className="received_withd_msg">
                    <p>{ message.message }</p>
                    <span className="time_date"> { hourMonth(message.createdAt) } </span>
                </div>
            </div>
        </div>
    </>
  )
}
