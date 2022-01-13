import React from 'react'
import kidsHome from '../../static/images/kids-home.png'
import './Home.css'

const Home = () => {
  return (
    <div>
      <div>
        Home
      </div>
      <div>
        <img className='kids-home' src={kidsHome} alt='science-kids' />
      </div>
    </div>
  )
}

export default Home
