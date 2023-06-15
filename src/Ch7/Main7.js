import "./Main7.css";
import videoDb from "./Data/data";
import { useState } from "react";
import AddVideo from "./Components/AddVideo";
import VideoList from "./Components/VideoList";
function Main7() {
  console.log("rendering main5");
  const [videos, setVideos] = useState(videoDb);
  const [editableVideo,setEditableVideo] = useState(null);

  function addVideo(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  function deleteVideo(id) {
    setVideos(videos.filter((video) => video.id !== id));
  }

  function editVideo(id) {
    setEditableVideo(videos.find(video=>video.id===id));
  }

  function updateVideo(video){
    // console.log(video);
    const index = videos.findIndex(v=>v.id === video.id);
    const newVideos = [...videos];
    newVideos.splice(index,1,video);
    setVideos(newVideos);
  }
  return (
    <>
      <div onClick={() => console.log("App")} className="App">
        <AddVideo addVideo={addVideo} updateVideo={updateVideo} editableVideo={editableVideo} />
        <VideoList
          editVideo={editVideo}
          deleteVideo={deleteVideo}
          videos={videos}
        />
      </div>
    </>
  );
}

export default Main7;
