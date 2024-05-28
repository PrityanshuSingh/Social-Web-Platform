import NavigationBar from "../../layouts/AfterLogin/NavigationBar/NavigationBar";
import BaseComponent from "../../layouts/AfterLogin/BaseComponent/BaseComponent";
import EventBar from "../../layouts/AfterLogin/EventBar/EventBar";
import AfterLog from "./styles/AfterLogin.module.css";

function AfterLogin(path) {
  return (
    <>
      <div className={AfterLog.frame}>
        <NavigationBar />
        <BaseComponent path={path.path}/>
        <EventBar />
      </div>  
    </> 
  );
}

export default AfterLogin;
