import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
import Favicon from '../static/images/favicon.png'

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='logo-left'>
        <img src={Favicon} alt='logo'></img>
      </div>
      <nav>
        <ul>
          <li className='menu-button'>
            <Link to="/">Home</Link>
          </li>
          <li className='menu-button'>
            <Link to="/mission">Our Mission</Link>
          </li>
          <li className='menu-button'>
            <Link to="/about">About Us</Link>
          </li>
          <li className='menu-button'>
            <Link to="/offerings">Offerings</Link>
          </li>
          <li className='menu-button'>
            <Link to="/samples">Sample Lessons</Link>
          </li>
        </ul>
      </nav>
      <div className='contact-button-div'>
        Contact Us
      </div>
    </div>
  )
}

export default Navigation
