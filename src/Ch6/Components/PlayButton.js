import React, { useState } from "react";
import "./PlayButton.css";

function PlayButton({ name, message, children, onClick, onPlay, onPause }) {
  console.log("rendering playButton");
  const [playing,setPlaying] = useState(false);
  const handleClick = (e) => {
    // console.log(e);
    e.stopPropagation(); // to stop event propagation
    if (playing) onPause();
    else onPlay();

    setPlaying(!playing);
  };
  return (
    <>
      <button onClick={handleClick}>{children} :{playing ? '⏸️': '⏯️'}</button>
    </>
  );
}

export default PlayButton;
