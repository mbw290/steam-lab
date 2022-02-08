import React from 'react'
import './VideoCard.css'

const VideoCard = (props) => {

  const { thumbnail, description } = props

  return (
    <>
      <div className='video-card__container'>
        <div className='video-card__thumbnail'>
          { thumbnail }
        </div>
        <div className='video-card__description'>
          { description }
        </div>
      </div>
    </>
  )
}

export default VideoCard
