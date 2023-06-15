import { useEffect, useState } from "react";
import "./AddVideo.css";
function AddVideo({ addVideo,updateVideo, editableVideo }) {
  let initialState = {
    time: "3 months ago",
    channel: "Coder Dost",
    verified: true,
    title: "",
    views: "",
  };
  const [video, setVideo] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editableVideo) {
      //functionality to edit 
      updateVideo(video); 
    } else {
      addVideo(video);
    }
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

  useEffect(() => {
    // console.log("useEffect");
    if (editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo]);
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

        <button onClick={handleSubmit}>
          {editableVideo ? "Edit" : "Add"} video
        </button>
      </form>
    </>
  );
}

export default AddVideo;
