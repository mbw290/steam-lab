import React from 'react'
import VideoCard from '../VideoCard'
import './Members.css'

const Members = () => {
  return (
    <div className='members__container'>
      <div className='members__videos-container'>
        <VideoCard
          thumbnail={ 'thumbnail image' }
          description={ 'description' }
        />
        <VideoCard
          thumbnail={ 'thumbnail image' }
          description={ 'description' }
        />
        <VideoCard
          thumbnail={ 'thumbnail image' }
          description={ 'description' }
        />
        <VideoCard
          thumbnail={ 'thumbnail image' }
          description={ 'description' }
        />
        <VideoCard
          thumbnail={ 'thumbnail image' }
          description={ 'description' }
        />
        <VideoCard
          thumbnail={ 'thumbnail image' }
          description={ 'description' }
        />
      </div>
    </div>
  )
}

export default Members
