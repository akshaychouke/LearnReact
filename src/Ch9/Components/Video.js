import React, { useContext } from "react";
import "./Video.css";
import ThemeContext from "../Context/ThemeContext"
function Video({
  title,
  id,
  views,
  time,
  channel = "Akshay Coder",
  verified,
  children,
  dispatch,
  editVideo
}) {
  console.log("rendering video");

  const theme = useContext(ThemeContext);
  console.log({theme});
  return (
    <>
      <div className={`container ${theme}`}>
      <button className="close" onClick={()=>dispatch({type:"DELETE",payload:id})}>X</button>
      <button className="edit" onClick={()=>editVideo(id)}>Edit</button>
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="Katherine Johnson"
          />
        </div>
        <div className="title">{title}</div>

        <div className="channel">
          {channel} {verified && "✅"}
        </div>

        <div className="views">
          {views} views <span>.</span> {time}
        </div>

        <div>{children}</div>
      </div>
    </>
  );
}

export default Video;
