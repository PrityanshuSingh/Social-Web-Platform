import NavigationBar from "../../components/MainFrame/NavigationBar/NavigationBar";
import BaseComponent from "../../components/MainFrame/BaseComponent/BaseComponent";
import EventBar from "../../components/MainFrame/EventBar/EventBar";
import mainframe from "./styles/MainFrame.module.css";

function MainFrame(path) {
  return (
    <>
      <div className={mainframe.frame}>
        <NavigationBar />
        <BaseComponent path={path.path}/>
        <EventBar />
      </div>  
    </> 
  );
}

export default MainFrame;
