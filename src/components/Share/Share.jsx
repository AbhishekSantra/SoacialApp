import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
import React from 'react'
import "./share.css"

const Share = () => {
  return (
    <div className='share'>
        <div className="sharewrapper">
            <div className="sharetop">
                <img src="/assets/person/1.png" alt="" className="shareProfileImg" />
                <input placeholder="what's in your mind ?" className="shareInput" />
            </div>
            <hr className='shareHr'/>
            <div className="sharebottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon'/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor='blue' className='shareIcon'/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor='green' className='shareIcon'/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className='shareButton'>Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share