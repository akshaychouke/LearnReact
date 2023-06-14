import "./Main4.css";
import Video from "./Components/Video";
import videos from "./Data/data";
import PlayButton from "./Components/PlayButton";
function Main4() {
  return (
    <>
      {/* <h1>Chapter 3</h1> */}
      <div onClick={()=>console.log("App")}className="App">
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

        {/* <PlayButton
            name="play"
            message="Playing"
            onClick={() => console.log("playyyyinggggggg")}
            onPlay={()=>console.log("Playing")}
            onPause={()=>console.log("pause")}
          >
            Play
          </PlayButton> */}

        {/* Here the onClick will be sent as the props. This does not work as actual onClick it only normal function */}
        {/* <PlayButton
            name="pause"
            message="pausing"
            onClick={() => alert("Pausing")}
          >
          </PlayButton> */}
      </div>
    </>
  );
}

export default Main4;
