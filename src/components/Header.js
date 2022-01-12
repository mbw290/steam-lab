import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './Header.css'
import Favicon from '../static/images/favicon.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-left'>
        <img src={Favicon} alt='logo'></img>
      </div>
      <nav className='nav-menu'>
        <ul>
          <li className='menu-button'>
            <Link to="/">Home</Link>
          </li>
          <li className='menu-button'>
            <Link to="./Mission.js">Our Mission</Link>
          </li>
          <li className='menu-button'>Nav 2</li>
          <li className='menu-button'>Nav 4</li>
          <li className='menu-button'>Nav 5</li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Header
