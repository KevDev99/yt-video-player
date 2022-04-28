import React, { useContext, useRef } from 'react';
import { FaSearch } from 'react-icons/fa'
import VideoContext from '../context/VideoContext';

const Header = ({setToggleSidebar}) => {

  const { fetchVideos, } = useContext(VideoContext);
  const inputEl = useRef("");


  const onSubmit = (e) => {
    e.preventDefault();

    const inputValue = inputEl.current.value;

    if (!inputValue || inputValue === "") return;

    const searchTerm = inputValue;

    fetchVideos(searchTerm);

  }

  return (
    <header>
      <h1>Browse</h1>
      <div className="search">
        <span className='searchtext'><span className="searchIcon"><FaSearch /></span></span>
        <form id="searchForm" onSubmit={onSubmit}>
          <input ref={inputEl} className="searchbar" placeholder='Search...' />
        </form>
      </div>
      <div className="recentWatched" >
        <button onClick={setToggleSidebar}>Show Recent Watched</button>
      </div>
    </header>
  )
}

export default Header