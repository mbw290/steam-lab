import React from 'react'
import kidsHome from '../../static/images/kids-home.png'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-text'>
        <p className='motto'>Your Next<br />Online <span className='blue-text'>School</span></p>
        <div className='description'>ONLINE STEAM VIDEO CHALLENGES TO SUPPORT STUDENTS, TEACHERS AND EXPANDED LEARNING PROGRAMS</div>
        <div><button className="btn-sample-lessons">Sample Lessons</button></div>
      </div>
      <div className='kids-home'>
        <img src={kidsHome} alt='Science Kids' />
      </div>
    </div>
  )
}

export default Home
