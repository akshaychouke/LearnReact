import "./Main9.css";
import videoDb from "./Data/data";
import { useContext, useReducer, useState } from "react";
import AddVideo from "./Components/AddVideo";
import VideoList from "./Components/VideoList";
import ThemeContext from "./Context/ThemeContext";


function Main9() {
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

  function editVideo(id) {
    setEditableVideo(videos.find(video=>video.id===id));
  }

  const [mode,setMode] = useState("lightTheme");
  const themeContext = useContext(ThemeContext);

  console.log({themeContext});

  return (
    <>
    <ThemeContext.Provider value={mode}>
      <div onClick={() => console.log("App")} className={`App ${mode}`}>
      <button onClick={()=>setMode(mode==="darkTheme" ?"lightTheme" : "darkTheme")}>Mode</button>
        <AddVideo dispatch={dispatch} editableVideo={editableVideo} />
        <VideoList
          editVideo={editVideo}
          dispatch={dispatch}
          videos={videos}
        />
      </div>
      </ThemeContext.Provider>
    </>
  );
}

export default Main9;
