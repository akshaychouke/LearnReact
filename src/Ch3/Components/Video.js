import React from "react";
import "./Video.css";

function Video({ title,id,views, time, channel = "Akshay Coder", verified }) {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="Katherine Johnson"
          />
        </div>
        <div className="title">{title}</div>

        {/* Different ways to write conditional rendoring */}
        {/* {verified ? <div className="channel">{channel}✅</div> :<div className="channel">{channel}</div>} */}

        {/* or */}

        {/* <div className="channel">
          {channel} {verified ? "✅" : null}
        </div> */}

        {/* or */}

        <div className="channel">
          {channel} {verified && "✅"}
        </div>
 
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}

export default Video;
