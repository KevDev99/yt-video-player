import React, { useContext } from 'react'
import VideoContext from '../context/VideoContext'

const VideoItem = (video) => {

  const { selectVideo } = useContext(VideoContext);
  const {
    id: { videoId }, snippet: { title, channelTitle, thumbnails } } = video;


  return (
    <div className="video col-sm-6 col-md-3 col-lg-6 my-4">
      <div className="videobox" onClick={() => {
        selectVideo(video.id.videoId);
      }}>
        <iframe alt='thumbnail' src={`https://www.youtube.com/embed/${videoId}`} />
      </div>

      <p className='video-channelTitle'>{channelTitle}</p>
    </div >
  )
}

export default VideoItem