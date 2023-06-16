import React, { useContext, useState } from "react";
import "./PlayButton.css";
import ThemeContext from "../Context/ThemeContext"
function PlayButton({ name, message, children, onClick, onPlay, onPause }) {
  console.log("rendering playButton");
  const [playing, setPlaying] = useState(false);
  const handleClick = (e) => {
    e.stopPropagation(); // to stop event propagation
    if (playing) onPause();
    else onPlay();

    setPlaying(!playing);
  };

  const theme = useContext(ThemeContext);

  return (
    <>
      <button onClick={handleClick} className={theme}>
        {children} :{playing ? "⏸️" : "⏯️"}
      </button>
    </>
  );
}

export default PlayButton;
