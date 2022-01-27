import { Link, Outlet, NavLink } from 'react-router-dom'
import Menu from 'react-burger-menu/lib/menus/slide'
import Logo from './static/images/logo.png'
import Footer from './components/Footer'
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
              <NavLink to='/' activeClassName="underline">HOME</NavLink>
            </li>
            <li className='nav-button'>
              <NavLink to='/mission' activeClassName="underline">OUR MISSION</NavLink>
            </li>
            <li className='nav-button'>
              <NavLink to='/about' activeClassName="underline">ABOUT US</NavLink>
            </li>
            <li className='nav-button'>
              <NavLink to='/offerings' activeClassName="underline">OFFERINGS</NavLink>
            </li>
            <li className='nav-button'>
              <NavLink to='/samples' activeClassName="underline">SAMPLE LESSONS</NavLink>
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
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default App;
