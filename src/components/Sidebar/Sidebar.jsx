import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@mui/icons-material'
import React from 'react'
import './sidebar.css'
import { Users } from '../../dummyData'
import CloseFriend from '../CloseFriend/CloseFriend'
const Sidebar = ({landing}) => {
  return (
    <div className="Sidebar">
        <div className="sidebarwrapper">
            <ul className="sidebarlist">
                <li className="sidebatlistitem">
                    <RssFeed className='sidebarIcon'/>
                    <span className="sidebaritemtext">Feed</span>
                </li>
                <li className="sidebatlistitem">
                    <Chat className='sidebarIcon'/>
                    <span className="sidebaritemtext">Chats</span>
                </li>
                <li className="sidebatlistitem">
                    <PlayCircleFilledOutlined className='sidebarIcon'/>
                    <span className="sidebaritemtext">Videos</span>
                </li>
                <li className="sidebatlistitem">
                    <Group className='sidebarIcon'/>
                    <span className="sidebaritemtext">Groups</span>
                </li>
                <li className="sidebatlistitem">
                    <Bookmark className='sidebarIcon'/>
                    <span className="sidebaritemtext">Bookmarks</span>
                </li>
                <li className="sidebatlistitem">
                    <HelpOutline className='sidebarIcon'/>
                    <span className="sidebaritemtext">Questions</span>
                </li>
                <li className="sidebatlistitem">
                    <WorkOutline className='sidebarIcon'/>
                    <span className="sidebaritemtext">Jobs</span>
                </li>
                <li className="sidebatlistitem">
                    <Event className='sidebarIcon'/>
                    <span className="sidebaritemtext">Events</span>
                </li>
                <li className="sidebatlistitem">
                    <School className='sidebarIcon'/>
                    <span className="sidebaritemtext">Courses</span>
                </li>
            </ul>
            <button className='sidebarbutton'>Show More</button>
            <hr className='sidebarHr'/>
            <ul className="sideFriendList">
                {landing?"":<>{Users.map(u=>(
                    <CloseFriend key={u.id} user={u}/>
                ))}</>}
                
            </ul>
        </div>
    </div>
  );
}
export default Sidebar