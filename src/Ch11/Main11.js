import "./Main11.css";
import videoDb from "./Data/data";
import { useContext, useReducer, useState } from "react";
import AddVideo from "./Components/AddVideo";
import VideoList from "./Components/VideoList";
import Counter from "./Components/Counter"
import ThemeContext from "./Context/ThemeContext";
import videosContext from "./Context/videoContext";
import videoDispatchContext from "./Context/videoDispatchContext";
function Main11() {
  console.log("rendering main5");
  const [editableVideo, setEditableVideo] = useState(null);

  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, videoDb);

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  const [mode, setMode] = useState("darkTheme");
  const themeContext = useContext(ThemeContext);

  console.log({ themeContext });

  return (
    <>
      <ThemeContext.Provider value={mode}>
        <videosContext.Provider value={videos}>
          <videoDispatchContext.Provider value={dispatch}>
            <div onClick={() => console.log("App")} className={`App ${mode}`}>
              <button
                onClick={() =>
                  setMode(mode === "darkTheme" ? "lightTheme" : "darkTheme")
                }
              >
                Mode
              </button>

              <Counter/>
              <AddVideo  editableVideo={editableVideo} />
              <VideoList editVideo={editVideo} />
            </div>
          </videoDispatchContext.Provider>
        </videosContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default Main11;
