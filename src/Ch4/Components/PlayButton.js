import React from 'react'
import "./PlayButton.css";

function PlayButton({name,message,children,onClick,onPlay,onPause}) {

    let playing = false;
    const handleClick = (e)=>{

      // console.log(e);
      e.stopPropagation();   // to stop event propagation
        // console.log(message);
        // or
        // onClick();    //calling the onClick function which is passes as the props

        //following is not recomended method to do implete the video controls
        if(playing) onPause();
        else onPlay();

        playing = !playing;
    }
  return (
    <>
        {/* <button onClick={()=>console.log("Start playing")}>Play</button> */}

        <button onClick={handleClick}>{children}</button>
    </>
  )
}

export default PlayButton;
