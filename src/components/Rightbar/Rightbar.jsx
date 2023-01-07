import React from 'react'
import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../Online/Online'
const Rightbar = ({ profile, landing }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
        {landing ? <><img src={`${PF}/ad.png`} alt="" className="rightbarAd" /><img src={`${PF}/ad2.jpeg`} alt="" className="rightbarAd" /></> : <><div className="birthdayContainer">
          <img src={`${PF}/gift.png`} alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Soumya </b>and<b> 3 other friends</b> have a birthday today.
          </span>
        </div>
          <img src={`${PF}/ad.png`} alt="" className="rightbarAd" />
          <div className='rightFriend'>
          <p className="rightbarTitle">Chats</p>
          <ul className="rightbarFerindlist">
            {Users.map(u => (
              <Online key={u.id} user={u}/>
            ))}
          </ul>
          </div>
        </>
        }

      </>
    )
  }
  const ProfileRightbar = () => {

    return (

      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Bhubaneswar, Odisha</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Jeypore, Odisha</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Education:</span>
            <span className="rightbarInfoValue">B.Tech</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${PF}/person/2.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Janell Shrum</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}/person/3.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Alex Durden</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}/person/4.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Dora Hawks</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}/person/5.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Thomas Holden</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}/person/6.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Shirley</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}/person/7.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Travis Bennett</span>
          </div>
        </div>
      </>

    )
  }
  return (
    <div className='Rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar