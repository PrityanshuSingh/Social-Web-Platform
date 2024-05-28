import FeedPost from "../../components/Feed/FeedPost/FeedPost";
import Feed from "./styles/Feed.module.css";

function FeedFrame() {
  return (
    <>
      <div className={Feed.feedContainer}>
        <div className={Feed.feedTitle}>Feed</div>
        <FeedPost />
      </div>
    </> 
  );
}

export default FeedFrame;
