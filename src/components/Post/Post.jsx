import { MoreVert } from "@mui/icons-material";
import React, { useState } from "react";
import './post.css'
import { Users } from "../../dummyData";
const Post=({post})=>{
    const [like,setLike]=useState(post.like)
    const [liked,setliked]=useState(false)
    const likehandler=()=>{
        setLike(liked?like-1:like+1)
        setliked(!liked)
    }
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    return(
        <div className="Post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={PF+Users.filter((u)=>u.id === post.userId)[0].profilePicture} alt="" className="postTopImg"/>
                        <span className="postTopName">{Users.filter((u)=>u.id === post.userId)[0].username}</span>
                        <span className="postTopDate">{post.date} mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={PF+post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${PF}/like.png`} alt="" onClick={likehandler} className="likeIcon" />
                        <img src={`${PF}/heart.png`} alt="" onClick={likehandler} className="likeIcon" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post

