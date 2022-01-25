import { Link, Outlet } from 'react-router-dom'
import Menu from 'react-burger-menu/lib/menus/slide'
import Logo from './static/images/logo.png'
import './App.css'

function App() {

  return (
    <div className="App">
      {/* Hamburger menu (only visible when screen width less than 1308px) */}
      <Menu right>
        <Link to='/'>HOME</Link>
        <Link to='/mission'>OUR MISSION</Link>
        <Link to='/about'>ABOUT US</Link>
        <Link to='/offerings'>OFFERINGS</Link>
        <Link to='/samples'>SAMPLE LESSONS</Link>
      </Menu>
      <div className='navigation'>
        <div className='logo-left'>
          <Link to='/'>
            <img src={Logo} alt='Logo' />
          </Link>
        </div>
        <nav className='nav-list'>
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
          <Link to='/contact'>
            <button className="button-contact-us">CONTACT US</button>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default App;
