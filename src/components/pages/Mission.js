import React from 'react'
import RocketLogo from '../../static/images/rocket_logo.png'
import './Mission.css'

const Mission = () => {
  return (
    <div className='mission__container'>
      <div className='mission__heading-container'>
        <span className='mission__heading'>Our Mission</span>
      </div>
      <div className='mission__joe-container'>
        <div className='mission__joe-image'><img src={ RocketLogo } alt="Joe Reed" />
          <p className='mission__name-text'>Joe Reed</p>
        </div>
        <div className='mission__text'>
          <p className='mission__body-text'>
            Joe Reed was a classroom teacher for 35 years. He designed individualized educational programs in the Burbank Community for over 35 years.
            He holds a Multiple Subject Teaching Credential, Special Education Credential, and a Clinical Rehabilitative Credential, Language Speech and Hearing.
            He also holds a Masters Degree in Administration and an Administrative Credential.
            He was selected National Science Fellow by the National Science Foundation and has also been named Teacher of the Year by the Los Angeles Times.
            He now consults with schools and school districts to help them create STEAM labs and Makerspace Rooms.
            He also trains teachers and students in robotics and coding.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mission
