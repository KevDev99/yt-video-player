import React, { useContext } from 'react'
import VideoContext from '../context/VideoContext'

const VideoModal = () => {

  const {selectedVideo, setShowVideoModal, showVideoModal} = useContext(VideoContext);

  if(!showVideoModal || !selectedVideo) return;

  console.log(selectedVideo);

  return (
    <>
      <div className='videoModal' onClick={() => setShowVideoModal(false)}>

      </div>

      <div className='videoModal_content'>
        <iframe alt='thumbnail' src={`https://www.youtube.com/embed/${selectedVideo}`} />
      </div>
    </>
  )
}

export default VideoModal