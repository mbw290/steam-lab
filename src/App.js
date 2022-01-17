import { Link, Outlet } from 'react-router-dom'
import Logo from './static/images/logo.png'
import './App.css'

function App() {
  return (
    <div className="App">
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
      <Outlet />
    </div>
  );
}

export default App;
