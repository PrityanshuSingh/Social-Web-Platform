import { useState } from "react";
import Card from "./styles/PostCard.module.css";
import PropTypes from 'prop-types';

function PostCard({ post, handleComment, handleLike, handleShare }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSetting = (postId) => {
    setShowDropdown((prev) => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  return (
    <div className={Card.postCard}>
      <div className={Card.postContent}>
        <div className={Card.postHeader}>
        
          {/*User Info*/}
          <div className={Card.userInfo}>
            <img
              loading="lazy"
              src={post.user.avatar}
              className={Card.userAvatar}
            />
            <div className={Card.username}>{post.user.username}</div>
          </div>

          <div className={Card.postBody}>

            {/*Post Image*/}
            <div className={Card.postImageColumn}>
          
                <img
                  loading="lazy"
                  src={post.image}
                  className={Card.postImage}
                />
            </div>

            {/*Post title and description*/}
            <div className={Card.postDetailsColumn}>
              <div className={Card.postDetails}>
                <div className={Card.postTitle}>{post.title}</div>
                  <div className={Card.postDescription}>
                    {post.description}
                  </div>
                  <div className={Card.postTags}>{post.tags.join(" ")}</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Post icon Actions */}
        <div className={Card.postActions}>
          <img
          loading="lazy"
          src="assets/comment.svg"
            className={Card.actionIcon}
            onClick={() => handleComment(post.id, "New comment")}
          />
          <img
            loading="lazy"
            src="assets/like.svg"
            className={Card.actionIcon}
            onClick={() => handleLike(post.id)}
          />
          <div className={Card.actionCount}>{post.likes}</div>

          <img
            loading="lazy"
            src="assets/share.svg"
            className={Card.actionIcon}
            onClick={() => handleShare(post.id)}
          />
          <div className={Card.actionCount}>{post.shares}</div>

          {/* Dropdown menu */}
          {showDropdown[post.id] && (
            <div className={Card.dropdownMenu}>
              <div
                className={Card.dropdownItem}
                onClick={() => console.log("Report")}
              >
                Report
              </div>
              <div
                className={Card.dropdownItem}
                onClick={() => console.log("Save")}
              >
                Save
              </div>
            </div>
          )}
          
          <img
            loading="lazy"
            src="assets/threedots.svg"
            className={Card.actionIcon}
            onClick={() => handleSetting(post.id)}
          />
        </div>
      </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    likes: PropTypes.number.isRequired,
    shares: PropTypes.number.isRequired,
  }).isRequired,
  handleComment: PropTypes.func.isRequired,
  handleLike: PropTypes.func.isRequired,
  handleShare: PropTypes.func.isRequired,
};

export default PostCard;
