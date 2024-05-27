import { useState } from "react";
import Feed from "./styles/FeedPost.module.css";
import testfeed from "../../../data/testfeed.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp, faShare, faEllipsisV} from "@fortawesome/free-solid-svg-icons";

function FeedFrame() {

  const [posts, setPosts] = useState(testfeed);
  const [showDropdown, setShowDropdown] = useState(false);

  // useEffect(() => {
  //   // Fetch data from the test JSON file
  //   setPosts(testData);
  // }, []);

  // const fetchPosts = async () => {
  //   try {
  //     const response = await fetch("/path/to/testData.json"); //fetching from json file for testing
  //     const data = await response.json();
  //     setPosts(data);
  //   } catch (error) {
  //     console.error("Error fetching posts:", error);
  //   }
  // };

  const handleSetting = (postId) => {
    setShowDropdown((prev) => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleLike = async (postId) => {
    try {
      // Simulate liking post by updating the like count
      const updatedPosts = posts.map((post) => {
        if (post.id === postId) {
          console.log(post.likes);
          return { ...post, likes: post.likes + 1 };
        }
        return post;
      });
      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleComment = async (postId, comment) => {
    try {
      // Simulate adding a comment by updating the comments array
      const updatedPosts = posts.map((post) => {
        if (post.id === postId) {
          console.log(post.comments);
          return {
            ...post,
            comments: [...post.comments, { text: comment, user: "You" }],
          };
        }
        return post;
      });
      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error commenting on post:", error);
    }
  };

  const handleShare = async (postId) => {
    try {
      // Simulate sharing post by incrementing share count
      const updatedPosts = posts.map((post) => {
        if (post.id === postId) {
          console.log(post.shares);
          return { ...post, shares: post.shares + 1 };
        }
        return post;
      });
      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error sharing post:", error);
    }
  };

  

  // FOR FETCHING FROM BACKEND API
  // const handleLike = async (postId) => {
  //   try {
  //     await fetch(`/api/posts/${postId}/like`, {
  //       method: "POST",
  //     });
  //     fetchPosts();
  //   } catch (error) {
  //     console.error("Error liking post:", error);
  //   }
  // };
  

  // const handleComment = async (postId, comment) => {
  //   try {
  //     await fetch(`/api/posts/${postId}/comment`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ comment }),
  //     });
  //     fetchPosts();
  //   } catch (error) {
  //     console.error("Error commenting on post:", error);
  //   }
  // };

  // const handleShare = async (postId) => {
  //   try {
  //     await fetch(`/api/posts/${postId}/share`, {
  //       method: "POST",
  //     });
  //     fetchPosts();
  //   } catch (error) {
  //     console.error("Error sharing post:", error);
  //   }
  // };

  return (
    <div>
      <div className={Feed.postContainer}>
        <div className={Feed.postList}>
          {posts.map((post) => (
            <div key={post.id} className={Feed.postCard}>
              <div className={Feed.postContent}>
                <div className={Feed.postHeader}>
                
                  {/*User Info*/}
                  <div className={Feed.userInfo}>
                    <img
                      loading="lazy"
                      src={post.user.avatar}
                      className={Feed.userAvatar}
                    />
                    <div className={Feed.username}>{post.user.username}</div>
                  </div>

                  <div className={Feed.postBody}>

                    {/*Post Image*/}
                    <div className={Feed.postImageColumn}>
                   
                        <img
                          loading="lazy"
                          src={post.image}
                          className={Feed.postImage}
                        />
                    </div>

                    {/*Post title and description*/}
                    <div className={Feed.postDetailsColumn}>
                      <div className={Feed.postDetails}>
                        <div className={Feed.postTitle}>{post.title}</div>
                          <div className={Feed.postDescription}>
                            {post.description}
                          </div>
                          <div className={Feed.postTags}>{post.tags.join(" ")}</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Post icon Actions */}
                <div className={Feed.postActions}>
                  <img
                  loading="lazy"
                  src="assets/comment.svg"
                    className={Feed.actionIcon}
                    onClick={() => handleComment(post.id, "New comment")}
                  />
                  <img
                    loading="lazy"
                    src="assets/like.svg"
                    className={Feed.actionIcon}
                    onClick={() => handleLike(post.id)}
                  />
                  <div className={Feed.actionCount}>{post.likes}</div>

                  <img
                    loading="lazy"
                    src="assets/share.svg"
                    className={Feed.actionIcon}
                    onClick={() => handleShare(post.id)}
                  />
                  <div className={Feed.actionCount}>{post.shares}</div>

                  {/* Dropdown menu */}
                  {showDropdown[post.id] && (
                    <div className={Feed.dropdownMenu}>
                      <div
                        className={Feed.dropdownItem}
                        onClick={() => console.log("Report")}
                      >
                        Report
                      </div>
                      <div
                        className={Feed.dropdownItem}
                        onClick={() => console.log("Save")}
                      >
                        Save
                      </div>
                    </div>
                  )}
                  
                  <img
                    loading="lazy"
                    src="assets/threedots.svg"
                    className={Feed.actionIcon}
                    onClick={() => handleSetting(post.id)}
                  />
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeedFrame;
