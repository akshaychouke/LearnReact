import "./Main6.css";
import videoDb from "./Data/data";
import { useState } from "react";
import AddVideo from "./Components/AddVideo";
import VideoList from "./Components/VideoList";
function Main6() {
  console.log("rendering main5");
  const [videos, setVideos] = useState(videoDb);

  function addVideo(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  return (
    <>
      <div onClick={() => console.log("App")} className="App">
        <VideoList videos={videos} />
        <div style={{clear:"both"}} className="videoContainer">
          <AddVideo addVideo={addVideo} />
        </div>
      </div>
    </>
  );
}

export default Main6;
