import React from 'react'
import './VideoCard.css'

const VideoCard = (props) => {

  const { thumbnail, description, title } = props

  return (
    <>
      <div className='video-card__container'>
        <div className='video-card__thumbnail'>
          <img src={ thumbnail } />
        </div>
        <div className='video-card__description'>
          <div className='video-card__title'><h3>{ title }</h3></div>
          <div className='video-card__text'>{ description }</div>
        </div>
      </div>
    </>
  )
}

export default VideoCard
