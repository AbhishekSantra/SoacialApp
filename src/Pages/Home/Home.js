import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import Topbar from '../../components/Topbar/Topbar'
import Rightbar from '../../components/Rightbar/Rightbar'
import "./Home.css"
const Home = () => {
  return (
    <>
    <Topbar/>
    <div className='HomeContainer'>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
    </div>
    </>
  )
}

export default Home