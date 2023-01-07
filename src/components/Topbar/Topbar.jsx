import React from 'react'
import './Topbar.css'
import { Search, Person, Notifications, Chat, Home, Timeline, Login } from '@mui/icons-material'
import { Link } from 'react-router-dom'
const Topbar = ({landing}) => {
    return (
        <div className='topbarcontainer'>
            <div className="TopbarLeft">
                <Link to="/home" className='TopLogo'>
                    <span><img className="logo" src='/assets/Logo.png' alt='Logo'/></span>
                </Link>
                    <h3 className='logoName'>AmSocial</h3>
                
            </div>
            <div className="TopbarCenter">
                <div className="searchbar">
                    <Search className='searchicon' />
                    <input placeholder='Search here' className="searchinput" />
                </div>
            </div>
            <div className="TopbarRight">
                <div className="topbarlinks">
                    <Link to="/home"><span className="topbarLink"><Home /></span></Link>
                    <span className="topbarLink"><Timeline /></span>
                </div>
                {landing ?
                    <Link to="/"><Login className="topbarimage" /></Link>
                    : <>
                        <div className="topbaricons">
                            <div className="topbariconItem">
                                <Person />
                                <span className="topbarbedge">1</span>
                            </div>
                            <div className="topbariconItem">
                                <Chat />
                                <span className="topbarbedge">2</span>
                            </div>
                            <div className="topbariconItem">
                                <Notifications />
                                <span className="topbarbedge">1</span>
                            </div>
                        </div>
                        <Link to="/profile/Abhishek"><img src="/assets/person/1.png" alt="" className="topbarimage" /></Link>
                    </>
                }
                
            </div>
        </div>

    )
}
export default Topbar