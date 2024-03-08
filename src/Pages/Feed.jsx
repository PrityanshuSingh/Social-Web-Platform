import Navigation from "../Components/Feed/Navigation";
import Feedframe from "../Components/Feed/Feedframe";
import RightSidebar from "../Components/Feed/RightSidebar";
import styles from "./css/Feed.module.css";

function Feed() {
  return (
      <div className={styles.feed}>
        <section className={styles.frame} />
        <div className={styles.rectangle}>
          
          <Navigation />
        </div>
        <Feedframe />
        <RightSidebar />
      </div>   
  );
};

export default Feed;
