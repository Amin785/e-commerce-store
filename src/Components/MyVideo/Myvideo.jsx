import React from 'react'
import myVideo from '../Assets/Videos/myVideo.mp4'
import './MyVideo.css'

const Myvideo = () => {
  return (
    <div>
        <h1>Small Video How to Use The Website</h1>
    <div className='video-play'>
        <video width="600" controls>
            <source src={myVideo} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
    </div>
    </div>
  )
}

export default Myvideo
