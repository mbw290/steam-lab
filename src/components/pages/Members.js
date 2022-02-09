import React, { useState } from 'react'
import VideoCard from '../VideoCard'
import './Members.css'
// kinder thumbnails
import KinderUmbrella from '../../static/images/video_thumbs/kinder_umbrella.png'
import KinderFoilBoats from '../../static/images/video_thumbs/kinder_foil-boats.png'
import KinderGingerbreadMan from '../../static/images/video_thumbs/kinder_gingerbread-man.png'
import KinderPingPong from '../../static/images/video_thumbs/kinder_ping-pong.png'
import KinderWaterCycle from '../../static/images/video_thumbs/kinder_water-cycle.png'
import KinderWhaleBlubber from '../../static/images/video_thumbs/kinder_whale-blubber.png'
// first thumbnails

const Members = () => {

  const kinder_videos = [
    {
      id: "kinder-1",
      thumbnail: KinderUmbrella,
      title: 'Design An Umbrella',
      description: 'Explore how to keep a creature dry in a rainstorm'
    },
    {
      id: "kinder-2",
      thumbnail: KinderFoilBoats,
      title: 'Buoyancy and Foil Boats',
      description: 'What makes a boat float? Design a boat that can hold the most pennies without sinking.'
    },
    {
      id: "kinder-3",
      thumbnail: KinderGingerbreadMan,
      title: 'Gingerbread Man Trap',
      description: 'The gingerbread man has escaped! Engineer a trap to catch him.'
    },
    {
      id: "kinder-4",
      thumbnail: KinderPingPong,
      title: 'Play Doh Straw Maze',
      description: 'Design a maze that uses motion and stability to move a ping pong ball'
    },
    {
      id: "kinder-5",
      thumbnail: KinderWaterCycle,
      title: 'Water Cycle in a Bag',
      description: 'Have you ever wondered where rain comes from? Find out in this exploration.'
    },
    {
      id: "kinder-6",
      thumbnail: KinderWhaleBlubber,
      title: 'Whale Blubber',
      description: 'Experience what it feels like to be a whale in the cold ocean water'
    }
  ]

  const first_videos = [
    {
      id: "first-1",
      thumbnail: 'first-1_thumbnail',
      description: 'first-1_description'
    },
    {
      id: "first-2",
      thumbnail: 'first-2_thumbnail',
      description: 'first-2_description'
    },
    {
      id: "first-3",
      thumbnail: 'first-3_thumbnail',
      description: 'first-3_description'
    },
    {
      id: "first-4",
      thumbnail: 'first-4_thumbnail',
      description: 'first-4_description'
    },
    {
      id: "first-5",
      thumbnail: 'first-5_thumbnail',
      description: 'first-1_description'
    },
    {
      id: "first-6",
      thumbnail: 'first-5_thumbnail',
      description: 'first-6_description'
    }
  ]

  const second_videos = [
    {
      id: "second-1",
      thumbnail: 'second-1_thumbnail',
      description: 'second-1_description'
    },
    {
      id: "second-2",
      thumbnail: 'second-2_thumbnail',
      description: 'second-2_description'
    },
    {
      id: "second-3",
      thumbnail: 'second-3_thumbnail',
      description: 'second-3_description'
    },
    {
      id: "second-4",
      thumbnail: 'second-4_thumbnail',
      description: 'second-4_description'
    },
    {
      id: "second-5",
      thumbnail: 'second-5_thumbnail',
      description: 'second-5_description'
    },
    {
      id: "second-6",
      thumbnail: 'second-6_thumbnail',
      description: 'second-6_description'
    }
  ]

  const third_videos = [
    {
      id: "third-1",
      thumbnail: 'third-1_thumbnail',
      description: 'third-1_description'
    },
    {
      id: "third-2",
      thumbnail: 'third-2_thumbnail',
      description: 'third-2_description'
    },
    {
      id: "third-3",
      thumbnail: 'third-3_thumbnail',
      description: 'third-3_description'
    },
    {
      id: "third-4",
      thumbnail: 'third-4_thumbnail',
      description: 'third-4_description'
    },
    {
      id: "third-5",
      thumbnail: 'third-5_thumbnail',
      description: 'third-5_description'
    },
    {
      id: "third-6",
      thumbnail: 'third-6_thumbnail',
      description: 'third-6_description'
    }
  ]

  const fourth_videos = [
    {
      id: "fourth-1",
      thumbnail: 'fourth-1_thumbnail',
      description: 'fourth-1_description'
    },
    {
      id: "fourth-2",
      thumbnail: 'fourth-2_thumbnail',
      description: 'fourth-2_description'
    },
    {
      id: "fourth-3",
      thumbnail: 'fourth-3_thumbnail',
      description: 'fourth-3_description'
    },
    {
      id: "fourth-4",
      thumbnail: 'fourth-4_thumbnail',
      description: 'fourth-4_description'
    },
    {
      id: "fourth-5",
      thumbnail: 'fourth-5_thumbnail',
      description: 'fourth-5_description'
    },
    {
      id: "fourth-6",
      thumbnail: 'fourth-6_thumbnail',
      description: 'fourth-6_description'
    }
  ]

  const fifth_videos = [
    {
      id: "fifth-1",
      thumbnail: 'fifth-1_thumbnail',
      description: 'fifth-1_description'
    },
    {
      id: "fifth-2",
      thumbnail: 'fifth-2_thumbnail',
      description: 'fifth-2_description'
    },
    {
      id: "fifth-3",
      thumbnail: 'fifth-3_thumbnail',
      description: 'fifth-3_description'
    },
    {
      id: "fifth-4",
      thumbnail: 'fifth-4_thumbnail',
      description: 'fifth-4_description'
    },
    {
      id: "fifth-5",
      thumbnail: 'fifth-5_thumbnail',
      description: 'fifth-5_description'
    },
    {
      id: "fifth-6",
      thumbnail: 'fifth-6_thumbnail',
      description: 'fifth-6_description'
    }
  ]

  const sixth_videos = [
    {
      id: "sixth-1",
      thumbnail: 'sixth-1_thumbnail',
      description: 'sixth-1_description'
    },
    {
      id: "sixth-2",
      thumbnail: 'sixth-2_thumbnail',
      description: 'sixth-2_description'
    },
    {
      id: "sixth-3",
      thumbnail: 'sixth-3_thumbnail',
      description: 'sixth-3_description'
    },
    {
      id: "sixth-4",
      thumbnail: 'sixth-4_thumbnail',
      description: 'sixth-4_description'
    },
    {
      id: "sixth-5",
      thumbnail: 'sixth-5_thumbnail',
      description: 'sixth-5_description'
    },
    {
      id: "sixth-6",
      thumbnail: 'sixth-6_thumbnail',
      description: 'sixth-6_description'
    }
  ]

  const videosMap = (videos) => {
    return (
      videos.map((video =>
        <VideoCard key={video.id} thumbnail={video.thumbnail} title={ video.title } description={video.description} />
      ))
    )
  }

  const handleGradeButtonClick = (videos) => {
    setShowVideos(videosMap(videos))
  }

  const [showVideos, setShowVideos] = useState(videosMap(kinder_videos))



  return (
    <div className='members__container'>
      <div className='members__button-container'>
      {/* grades nav menu */}
      <ul className='members__grade-buttons'>
        <li>
          <button>All Videos</button>
        </li>
        <li>
          <button onClick={ () => handleGradeButtonClick(kinder_videos) }>Kindergarten</button>
        </li>
        <li>
          <button onClick={ () => handleGradeButtonClick(first_videos) }>Grade 1</button>
        </li>
        <li>
          <button onClick={ () => handleGradeButtonClick(second_videos) }>Grade 2</button>
        </li>
        <li>
          <button onClick={ () => handleGradeButtonClick(third_videos) }>Grade 3</button>
        </li>
        <li>
          <button onClick={ () => handleGradeButtonClick(fourth_videos) }>Grade 4</button>
        </li>
        <li>
          <button onClick={ () => handleGradeButtonClick(fifth_videos) }>Grade 5</button>
        </li>
        <li>
          <button onClick={ () => handleGradeButtonClick(sixth_videos) }>Grade 6</button>
        </li>
      </ul>
      </div>
      <div className='members__videos-container'>
        {showVideos}
      </div>
    </div>
  )
}

export default Members
