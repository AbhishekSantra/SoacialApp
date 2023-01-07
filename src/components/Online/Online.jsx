import React from 'react'
import './online.css'
const Online = ({ user }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>

            <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                    <img src={PF + user.profilePicture} alt="" className="rightbarProfileImg" />
                    <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarName">{user.username}</span>
            </li>
            <hr className='friendHr' />
        </>
    )
}

export default Online