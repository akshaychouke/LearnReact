import Video from './Video';
import PlayButton from './PlayButton';
import useVideosHook from "../Hooks/videosHook";
function VideoList({editVideo}) {
  const videos = useVideosHook(); 
  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          editVideo = {editVideo}
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
    </>
  );
}

export default VideoList;
