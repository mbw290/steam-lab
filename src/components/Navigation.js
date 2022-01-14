import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
import Logo from '../static/images/logo.png'

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='logo-left'>
        <Link to='/'>
          <img src={Logo} alt='Logo' />
        </Link>
      </div>
      <nav>
        <ul>
          <li className='nav-button'>
            <Link to='/'>HOME</Link>
          </li>
          <li className='nav-button'>
            <Link to='/mission'>OUR MISSION</Link>
          </li>
          <li className='nav-button'>
            <Link to='/about'>ABOUT US</Link>
          </li>
          <li className='nav-button'>
            <Link to='/offerings'>OFFERINGS</Link>
          </li>
          <li className='nav-button'>
            <Link to='/samples'>SAMPLE LESSONS</Link>
          </li>
        </ul>
      </nav>
      <div className='contact-us'>
        CONTACT US
      </div>
    </div>
  )
}

export default Navigation
