import "./Main5.css";
import Video from "./Components/Video";
import videoDb from "./Data/data";
import PlayButton from "./Components/PlayButton";
import Counter from "./Components/Counter";
import { useState } from "react";

function Main5() {
  console.log("rendering main5");
  const [videos, setVideos] = useState(videoDb);
  return (
    <>
      <div onClick={() => console.log("App")} className="App">
        {videos.map((video) => (
          <Video
            key={video.id}
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
            verified={video.verified}
            id={video.id}
          >
            <PlayButton
              name="play"
              message="Playing"
              onClick={() => console.log("playyyyinggggggg")}
              onPlay={() => console.log("Playing")}
              onPause={() => console.log("pause")}
            >
              Play
            </PlayButton>
          </Video>
        ))}
        <div style={{ clear: "both" }}>
          <Counter />
        </div>
        <div>
          {" "}
          <button
            onClick={() => {
              setVideos([
                ...videos,
                {
                  id: videos.length + 1,
                  title: "Demo js tutorial",
                  views: "300K",
                  time: "3 months ago",
                  channel: "Coder Dost",
                  verified: true,
                },
              ]);
            }}
          >
            Add video
          </button>
        </div>
      </div>
    </>
  );
}

export default Main5;
