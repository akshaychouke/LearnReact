import "./Main8.css";
import videoDb from "./Data/data";
import { useReducer, useState } from "react";
import AddVideo from "./Components/AddVideo";
import VideoList from "./Components/VideoList";
function Main8() {
  console.log("rendering main5");
  const [editableVideo,setEditableVideo] = useState(null);
  function videoReducer(videos,action){
    switch(action.type){
      case "ADD":
        return([...videos, { ...action.payload, id: videos.length + 1 }]);
      case "DELETE":
        return(videos.filter((video) => video.id !== action.payload))
      case "UPDATE":
        const index = videos.findIndex(v=>v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index,1,action.payload);
        setEditableVideo(null);
        return(newVideos)
      default:
        return videos
    }
  }
  const [videos,dispatch] = useReducer(videoReducer,videoDb);
  // const [videos, setVideos] = useState(videoDb);

  // function deleteVideo(id) {
  //   dispatch({type:"DELETE",payload:id});
  //   // setVideos(videos.filter((video) => video.id !== id));
  // }

  function editVideo(id) {
    setEditableVideo(videos.find(video=>video.id===id));
  }

  return (
    <>
      <div onClick={() => console.log("App")} className="App">
        <AddVideo dispatch={dispatch} editableVideo={editableVideo} />
        <VideoList
          editVideo={editVideo}
          dispatch={dispatch}
          videos={videos}
        />
      </div>
    </>
  );
}

export default Main8;
