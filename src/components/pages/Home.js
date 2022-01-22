import React from 'react'
import { Link } from 'react-router-dom'
import kidsHome from '../../static/images/kids-home.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCut, faVideo, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import './Home.css'
import '../../App.css'

const iconStyling = {
  padding: '16px'
}

const Home = () => {
  return (
    <>
      {/* <div className='intro-video__container'>
        <video playsInline controls autoPlay muted style={{opacity: 1, maxWidth: 1200, height: 500}}>
          <source src="https://mrreedssteamlab.s3-us-west-1.amazonaws.com/Steam+Lab+Intro.mp4" type="video/mp4" />
        </video>
      </div> */}
      <div className='home-container'>
        <div className='home-text'>
          <p className='motto'>Where Excitement<br />and Learning<br /><span className='blue-text'>Come Together</span></p>
          <div className='description'>Online STEAM video challenges to support students, teachers, and expanded learning programs</div>
          <div className='buttons__container'>
            <div className='contact-button__container'>
              <Link to='/contact'>
                <button className="button-contact-us">CONTACT US</button>
              </Link>
            </div>
            <div className='sample-button__container'>
              <Link to='/samples'>
                <button className='button-sample-lessons'></button><span className='button-sample-lessons__text'>Sample Lessons</span>
              </Link>
            </div>
          </div>
        </div>
        <div className='kids-home'>
          <img src={kidsHome} alt='Science Kids' />
        </div>
      </div>
      <div className='offerings__container'>
        <div className='offerings'>
          <div className='offerings-left'>
            <div className='video-icon__container'>
              <FontAwesomeIcon icon={faVideo} color='white' size='2x' style={iconStyling} />
            </div>
            <span>42 Challenge Videos (6 per grade-level, K-6)</span>
          </div>
          <div className='offerings-center'>
            <div className='video-icon__container'>
              <FontAwesomeIcon icon={faFileAlt} color='white' size='2x' style={iconStyling} />
            </div>
            <span>Additional teacher resource documents for extension and enrichment</span>
          </div>
          <div className='offerings-right'>
            <div className='video-icon__container'>
              <FontAwesomeIcon icon={faCut} color='white' size='2x' style={iconStyling} />
            </div>
            <span>Designed for easy implementation with easy-to-find materials</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
