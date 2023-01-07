import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import Topbar from '../../components/Topbar/Topbar'
import Rightbar from '../../components/Rightbar/Rightbar'
import './profile.css'
const Profile = () => {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    return (
    <>
    <Topbar/>  
    <div className='profile'>
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src={`${PF}/post/8.jpeg`} alt="" className="profileCoverImg" />
                    <img src={`${PF}/person/1.png`} alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Abhishek Santra</h4>
                    <span className="profileInfoDesc">Hello Friends...</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile