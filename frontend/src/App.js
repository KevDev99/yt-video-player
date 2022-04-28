import { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import VideoList from "./components/VideoList";
import VideoModal from "./components/VideoModal";
import VideoContext, { VideoProvider } from "./context/VideoContext";


function App() {

  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <VideoProvider>
      <>
        <Header  setToggleSidebar={setToggleSidebar}></Header>
        <VideoList />
        {toggleSidebar && <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />}
        
        <VideoModal />
      </>
    </VideoProvider>
  );
}

export default App;
