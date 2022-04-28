import React, { useContext, useEffect } from 'react'
import VideoContext from '../context/VideoContext';
import VideoItem from './VideoItem';

const VideoList = () => {

  const { videos, isLoading, } = useContext(VideoContext);

  if (isLoading) return <p>Loading...</p>

  if(videos === []) return (
    <p className='videosPlaceHolderText text-center mt-5'>Start searching..</p>
  )

  
  return (
    <section className="videoList mt-2">
      <div className="container-fluid">
        <div className="row">
          {
            videos.map(video =>
              <VideoItem key={video.id.videoId} {...video} />
            )
          }
        </div>
      </div>

    </section>
  )
}

export default VideoList