import React from 'react'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/Rightbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import './landing.css'
const Landing = () => {
    return (
        <div>
            <Topbar landing/>
            <div className='HomeContainer'>
                <Sidebar landing/>
                <Feed landing/>
                <Rightbar landing/>
            </div>
        </div>
    )
}

export default Landing