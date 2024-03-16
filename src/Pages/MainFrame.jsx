import NavigationBar from "../Components/MainFrame/NavigationBar";
import BaseComponent from "../Components/MainFrame/BaseComponent";
import EventBar from "../Components/MainFrame/EventBar";
import mainframe from "./css/MainFrame.module.css";

function MainFrame() {
  return (
    <>
      <div className={mainframe.frame}>
        <NavigationBar />
        <BaseComponent />
        <EventBar />
      </div>  
    </> 
  );
}

export default MainFrame;
