import "./Main3.css";
import Video from "./Components/Video";
import videos from "./Data/data";
function Main3() {
  return (
    <>
      {/* <h1>Chapter 3</h1> */}
      <div className="App">
        {videos.map((video) => (
          <Video key={video.id}
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
            verified={video.verified}
            id={video.id}
          ></Video>
        ))}
      </div>
    </>
  );
}

export default Main3;
