import FeedPost from "../FeedPost/FeedPost";
import Feed from "./styles/FeedFrame.module.css";

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
