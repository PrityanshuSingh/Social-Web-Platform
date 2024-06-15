import { useState } from "react";
import PropTypes from 'prop-types';

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart, faArrowUpFromBracket, faBookmark, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

// Styles
import Card from "./styles/PostCard.module.css";

// Modals
import ReportModal from "../../../microInteraction/Modals/Feed/ReportModal/ReportModal";

function PostCard({ 
  post, 
  currentUser, 
  liked, 
  saved,
  reported, 

  handleLike, 
  handleUnlike, 

  // handleComment, 
  // handleUncommment,
  // handleLikeComment,
  // handleUnlikeComment,
  // handleReplyComment,
  // handleUnreplyComment,

  handleSave,
  handleUnsave,

  handleShare,

  handleReport, 
  handleUnreport

  }) {


  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  // const [reported, setReported] = useState(false);
  // console.log(reported);


  //Like and Unlike functions
  const handleLikeClick = () => {
    if (!liked) {
      handleLike(post.id, currentUser);
      console.log("Liked");
    }
  };

  const handleUnlikeClick = () => {
    if (liked) {
      handleUnlike(post.id, currentUser);
      console.log("Unliked");
    }
  };

  //Comment functions
  const handleCommentModal = () => {
    console.log("Commented");
    // <CommentModal />;
  };


  //Share functions
  const handleShareModal = () => {
    console.log("Shared");
    // <ShareModal />;
  };

  const closeShareModal = () => {
    setIsReportModalOpen(false);
    console.log("Closed Report Modal");
  };

  const confirmShareModal = () => {
    setIsReportModalOpen(false);
    handleReport(post.id, currentUser);
    console.log("Post reported",post.id,currentUser.id);
  };

  
  //Report and Unreport functions
  const handleReportModal = () => {
    setIsReportModalOpen(true);
    console.log("Opened Report Modal");
  };

  const closeReportModal = () => {
    setIsReportModalOpen(false);
    console.log("Closed Report Modal");
  };

  const confirmReportModal = () => {
    setIsReportModalOpen(false);
    handleReport(post.id, currentUser);
    console.log("Post reported",post.id,currentUser.id);
  };

  const unconfirmReport = () => {
    handleUnreport(post.id, currentUser);
    console.log("Post unreported",post.id,currentUser.id);
  };


  //Save and Unsave functions
  const handleSaveClick = () => {
    handleSave(post.id, currentUser);
    console.log("Saved");
  }

  const handleUnsaveClick = () => {
    handleUnsave(post.id, currentUser);
    console.log("Unsaved");
  }

  return (
    <div className={Card.postCard}>
      <div className={Card.postContent}>
        <div className={Card.postHeader}>

          {/* User Info */}
          <div className={Card.userInfo}>
            <img
              loading="lazy"
              src={post.user.avatar}
              className={Card.userAvatar}
            />
            <div className={Card.username}>{post.user.username}</div>
          </div>

          <div className={Card.postBody}>

            {/* Post Image */}
            <div className={Card.postImageColumn}>
              <img
                loading="lazy"
                src={post.image}
                className={Card.postImage}
                onDoubleClick={handleLikeClick}
              />
            </div>

            {/* Post title and description */}
            <div className={Card.postDetailsColumn}>
              <div className={Card.postDetails}>
                <div className={Card.postTitle}>{post.title}</div>
                <div className={Card.postDescription}>
                  {post.description}
                </div>
                <div className={Card.postTags}>{post.tags.join(" ")}</div>
              </div>

              
              {/* Post icon Actions */}
              <div className={Card.postActions}>
                <div className={Card.actionIconContainer}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={liked ? Card.actionIconLiked : Card.actionIcon}
                    onClick={liked ? handleUnlikeClick : handleLikeClick}
                  />
                  <div className={Card.actionCount}>{post.likes}</div>
                </div>

                <div className={Card.actionIconContainer}>
                  <FontAwesomeIcon
                    icon={faComment}
                    className={Card.actionIcon}
                    onClick={handleCommentModal}
                  />
                  <div className={Card.actionCount}>{post.comments.length}</div>
                </div>

                <div className={Card.actionIconContainer}>
                  <FontAwesomeIcon
                    icon={faArrowUpFromBracket}
                    className={Card.actionIcon}
                    onClick={handleShareModal}
                  />
                  <div className={Card.actionCount}>{post.shares}</div>
                </div>

                <div className={Card.actionIconContainer}>
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className={saved ? Card.actionIconSaved : Card.actionIcon}
                    onClick={saved ? handleUnsaveClick : handleSaveClick }
                  />
                </div>

                <div className={Card.actionIconContainer}>
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className={reported ? Card.actionIconReported : Card.actionIcon}
                    onClick={reported ? unconfirmReport : handleReportModal }
                  />
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
      {isReportModalOpen && (
        <ReportModal
          isModalOpen={isReportModalOpen}
          onClose={closeReportModal}
          onConfirm={confirmReportModal}
        />
      )}
    </div>
  );
}

PostCard.propTypes = {

  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,

    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,

  }).isRequired,

  currentUser: PropTypes.object.isRequired,
  liked: PropTypes.bool.isRequired,
  saved: PropTypes.bool.isRequired,
  reported: PropTypes.bool.isRequired,

  handleLike: PropTypes.func.isRequired,
  handleUnlike: PropTypes.func.isRequired,

  handleComment: PropTypes.func.isRequired,
  handleUncomment: PropTypes.func.isRequired,
  handleLikeComment: PropTypes.func.isRequired,
  handleUnlikeComment: PropTypes.func.isRequired,
  handleReplyComment: PropTypes.func.isRequired,
  handleUnreplyComment: PropTypes.func.isRequired,

  handleSave: PropTypes.func.isRequired,
  handleUnsave: PropTypes.func.isRequired,

  handleShare: PropTypes.func.isRequired,

  handleReport: PropTypes.func.isRequired,
  handleUnreport: PropTypes.func.isRequired,
};

export default PostCard;
