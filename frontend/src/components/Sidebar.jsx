import React, { useContext, useEffect, useState } from 'react';
import VideoContext from '../context/VideoContext';

const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {

  const [videoList, setVideoList] = useState([]);

  const { selectVideo, videos } = useContext(VideoContext)

  useEffect(() => {
    setVideoList(JSON.parse(localStorage.getItem('currentRWvideos')));
  }, [])

  return (
    <aside className="sidebar">
      <div className="sidebar_header p-3">
        <button className="closeBtn" onClick={() => setToggleSidebar(!toggleSidebar)}>X</button>
      </div>

      <div className="sidebar_content p-3">
        <h2>Recent Videos</h2>
        <div className="recentWatchedVideos">
          {videoList.map(videoId => {
            return (<div key={videoId} className="videobox" onClick={() => {

              selectVideo(videoId);
            }}>
              <iframe  className='my-3' src={`https://www.youtube.com/embed/${videoId}`} />
            </div>)
          })}
        </div>


      </div>



    </aside>
  )
}

export default Sidebar