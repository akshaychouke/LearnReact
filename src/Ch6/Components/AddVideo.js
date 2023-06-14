import { useState } from "react";
import "./Addvideo.css";
function AddVideo({ addVideo }) {

    let initialState = {
        time: "3 months ago",
        channel: "Coder Dost",
        verified: true,
        title:'',
        views:''
    }
  const [video, setVideo] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    addVideo(video);
    setVideo(initialState);
  };

  const handleChange = (e) => {
    e.stopPropagation();
    console.log(e.target.name, e.target.value);
    setVideo({
      ...video,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
          value={video.title}
        />
        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="views"
          value={video.views}
        />

        <button onClick={handleSubmit}>Add video</button>
      </form>
    </>
  );
}

export default AddVideo;
