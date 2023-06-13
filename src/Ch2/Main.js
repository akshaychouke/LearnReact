// import File1 from "./Components/File1";
import "./Main.css";
import {Video,Thumb} from "./Components/Video";
import Gallary from "./Components/Gallary"
import LearnProps from "./Components/LearnProps";
import SomeJsx from "./Components/SomeJsx";
function Main() {
  return (
    <div className="Header">
      <h1 style={{backgroundColor:"yellow"}}>This is main page heading</h1>
      {/* <File1 /> */}
      <Video/>
      <Thumb/>

      {/* This component is used to learn props */}
      <LearnProps title="Learn Props 1" bgCol="gray"/>
      <LearnProps title="Learn Props 2" bgCol="pink"/>
      <LearnProps title="Learn Props 3"/>








      <SomeJsx/>
      <Gallary/>
    </div>
  );
}

export default Main;
