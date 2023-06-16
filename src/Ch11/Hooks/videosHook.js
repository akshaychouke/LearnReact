import { useContext } from 'react'
import videosContext from "../Context/videoContext";

function useVideosHook() {
  return useContext(videosContext);
}

export default useVideosHook;
