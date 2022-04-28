import { createContext, useState } from "react";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();
  const [showVideoModal, setShowVideoModal] = useState(false);

  const fetchVideos = async (q) => {
    const response = await fetch(`/api/search?q=${q}`);
    const data = await response.json();

    setVideos(data.items);
    setIsLoading(false);
  }

  const saveToRecentWatched = (videoId) => {
    // get current recent watched from local storage
    const currentRWvideos = JSON.parse(localStorage.getItem('currentRWvideos')) || [];


    if(currentRWvideos.length === 5) currentRWvideos.shift();

    if (!currentRWvideos.includes(videoId)) {
      currentRWvideos.push(videoId)
    }

    // save to local storage
    localStorage.setItem('currentRWvideos', JSON.stringify(currentRWvideos))
  }

  const selectVideo = (videoId) => {
    saveToRecentWatched(videoId);
    setSelectedVideo(videoId);
    setShowVideoModal(true);
  }

  return (
    <VideoContext.Provider
      value={{
        fetchVideos,
        isLoading,
        videos,
        selectVideo,
        selectedVideo,
        showVideoModal,
        setShowVideoModal
      }}>
      {children}
    </VideoContext.Provider>
  )

}

export default VideoContext;