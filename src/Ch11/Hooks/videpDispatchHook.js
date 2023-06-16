import { useContext } from "react";
import videoDispatchContext from "../Context/videoDispatchContext";

function useVidepDispatchHook() {
  return useContext(videoDispatchContext);
}

export default useVidepDispatchHook;
