import React from "react";
import Video from './Video';
import PlayButton from './PlayButton';

function VideoList({videos,dispatch,editVideo}) {
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
          dispatch = {dispatch}
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
