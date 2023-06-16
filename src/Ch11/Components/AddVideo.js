import { useEffect, useRef, useState } from "react";
import "./AddVideo.css";
import useVidepDispatchHook from "../Hooks/videpDispatchHook";
function AddVideo({ updateVideo, editableVideo }) {
  let initialState = {
    time: "3 months ago",
    channel: "Coder Dost",
    verified: true,
    title: "",
    views: "",
  };

  const [video, setVideo] = useState(initialState);
  const dispatch = useVidepDispatchHook();

  const inputRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (editableVideo) {
      //functionality to edit
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
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

    // inputRef.current.focus()
    // setInterval(() => {
    //   inputRef.current.placeholder = "";

    //   "enter the title".split("").forEach((char, i) => {
    //     setTimeout(() => {
    //       inputRef.current.placeholder = inputRef.current.placeholder + char;
    //     }, 300 * i);
    //   });
    // },6000);
  }, [editableVideo]);
  return (
    <>
      <form>
        <input
          ref={inputRef} //this is the default prop whos name shoul be ref no other name
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
