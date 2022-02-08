import React from 'react'
import VideoCard from '../VideoCard'
import './Members.css'

const Members = () => {

  const kinder_videos = [
    {
      id: "kinder-1",
      thumbnail: 'kinder-1_thumbnail',
      description: 'kinder-1_description'
    },
    {
      id: "kinder-2",
      thumbnail: 'kinder-2_thumbnail',
      description: 'kinder-2_description'
    },
    {
      id: "kinder-3",
      thumbnail: 'kinder-3_thumbnail',
      description: 'kinder-3_description'
    },
    {
      id: "kinder-4",
      thumbnail: 'kinder-4_thumbnail',
      description: 'kinder-4_description'
    },
    {
      id: "kinder-5",
      thumbnail: 'kinder-5_thumbnail',
      description: 'kinder-1_description'
    },
    {
      id: "kinder-6",
      thumbnail: 'kinder-5_thumbnail',
      description: 'kinder-6_description'
    }
  ]
  
  // const video_cards = Object.entries(videos).map((key) => {
  //   key[1].map(grade => {
  //     <li>hello</li>
  //   })
  // })

  const numbers = [1, 2, 3, 4, 5];
  const listItems = kinder_videos.map((video) =>
    <VideoCard key={video.id} thumbnail={video.thumbnail} description={video.description} />
  );

  return (
    <div className='members__container'>
      <div className='members__videos-container'>
        {listItems}
        {/* <VideoCard
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
        /> */}
      </div>
    </div>
  )
}

export default Members
