import React from 'react'
import { Link } from 'react-router-dom'
import kidsHome from '../../static/images/kids-home.png'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className='intro-video__container'>
        <video playsInline controls autoPlay muted style={{opacity: 1, maxWidth: 1200, height: 500}}>
          <source src="https://mrreedssteamlab.s3-us-west-1.amazonaws.com/Steam+Lab+Intro.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='home-container'>
        <div className='home-text'>
          <p className='motto'>Where Excitement<br />and Learning<br /><span className='blue-text'>Come Together</span></p>
          <div className='description'>ONLINE STEAM VIDEO CHALLENGES TO SUPPORT STUDENTS, TEACHERS AND EXPANDED LEARNING PROGRAMS</div>
          <div className='button-sample-lessons__container'>
            <Link to='/samples'>
              <button className='button-sample-lessons'></button><span className='button-sample-lessons__text'>Sample Lessons</span>
            </Link>
          </div>
        </div>
        <div className='kids-home'>
          <img src={kidsHome} alt='Science Kids' />
        </div>
      </div>
    </>
  )
}

export default Home
