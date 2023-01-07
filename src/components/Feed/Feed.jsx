import React from 'react'
import Share from '../Share/Share'
import Post from '../Post/Post'
import './feed.css'
import { Posts } from "../../dummyData"
const Feed = ({landing}) => {
  const LandingFeed = () => {
    return (
      <>
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </>
    )
  }
  const ProfileFeed = () => {
    return (
      <>
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </>
    )
  }
  return (
    <div className='Feed'>
      <div className="feedwrapper">
        {landing?<LandingFeed/>:<ProfileFeed/>}
      </div>
    </div>
  )
}

export default Feed