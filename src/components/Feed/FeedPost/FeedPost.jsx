import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import PostCard from "../PostCard/PostCard";
import TestFeed from "../../../data/TestFeed.json";

import Post from "./styles/FeedPost.module.css";

function FeedPost({ searchText, currentUser }) {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [loading, setLoading] = useState(false);
 

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/posts");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const postsWithLikedStatus = data.map((post) => ({
        ...post,
        liked: post.likedBy.includes(currentUser.id),
        saved: post.savedBy.includes(currentUser.id),
        reported: post.reportedBy.includes(currentUser.id),
      }));
      setPosts(postsWithLikedStatus);
      setFilteredPosts(postsWithLikedStatus);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  }, [currentUser.id]);

  useEffect(() => {
    if (shouldFetch){
      fetchPosts();
      setShouldFetch(false);
    }
  }, [fetchPosts, shouldFetch]);


  const filterPosts = useCallback(() => {
    if (!searchText) {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) => {
        // Check if the post contains the searchText in tags or usernames
        const tagMatch = post.tags.some((tag) => tag.includes(searchText));
        const usernameMatch = post.user.username.toLowerCase().includes(searchText.toLowerCase());
        
        return tagMatch || usernameMatch;
      });
      setFilteredPosts(filtered);
    }
  }, [searchText, posts]);

  
  useEffect(() => {
    filterPosts();
  }, [filterPosts]);




  async function updatePostInBackend(updatedPost) {
    try {
      await fetch("http://localhost:5000/api/updateTestFeed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPost),
      });
    } catch (error) {
      console.error("Error updating post:", error);
    }
  }


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

  //like and unlike functions
  const handleLike = async (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId && !post.liked) {
        const updatedPost = {
          ...post,
          likes: post.likes + 1,
          liked: true,
          likedBy: [...post.likedBy, currentUser.id],
        };
        updatePostInBackend(updatedPost); // Send the update to the backend
        post.liked = true;
        return updatedPost;
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleUnlike = async (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId && post.liked) {
        const updatedPost = {
          ...post,
          likes: post.likes - 1,
          liked: false,
          likedBy: post.likedBy.filter((userId) => userId !== currentUser.id),
        };
        updatePostInBackend(updatedPost); // Send the update to the backend
        return updatedPost;
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  //save and unsave functions
  const handleSave = async (postId) => {
    const updatedPosts = posts.map((post)=>{
      if (post.id === postId && !post.saved){
        const updatedPost = {
          ...post,
          saves: post.saves + 1,
          saved: true,
          savedBy: [...post.savedBy, currentUser.id],
        };
        updatePostInBackend(updatedPost);
        return updatedPost;
      }
      return post;
    })
    setPosts(updatedPosts);
  };

  const handleUnsave = async (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId && post.saved) {
        const updatedPost = {
          ...post,
          saves: post.saves - 1,
          saved: false,
          savedBy: post.savedBy.filter((userId) => userId !== currentUser.id),
        };
        updatePostInBackend(updatedPost); // Send the update to the backend
        return updatedPost;
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  //report and unreport functions
  const handleReport = async (postId) => {
      const updatedPosts = posts.map((post) => {
        if (post.id === postId && !post.reported) {
          const updatedPost = {
            ...post,
            reports: post.reports + 1,
            reported: true,
            reportedBy: [...post.reportedBy, currentUser.id],
          };
          updatePostInBackend(updatedPost); // Send the update to the backend
          return updatedPost;
        }
        return post;
      });
      setPosts(updatedPosts);
  };

  const handleUnreport = async (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId && post.reported) {
        const updatedPost = {
          ...post,
          reports: post.reports - 1,
          reported: false,
          reportedBy: post.reportedBy.filter((userId) => userId !== currentUser.id),
        };
        updatePostInBackend(updatedPost); // Send the update to the backend
        return updatedPost;
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  

  // // Function to update TestFeed.json
  // const updateTestFeed = (updatedPosts) => {
  //   const updatedTestFeed = TestFeed.map((post) => {
  //     const updatedPost = updatedPosts.find((p) => p.id === post.id);
  //     return updatedPost ? updatedPost : post;
  //   });
  //   // Update TestFeed.json with the new data
  //   // In a real-world scenario, you would typically send this data to a backend API to persist changes
  //   console.log("Updated TestFeed:", updatedTestFeed);
  //   // Example: You might want to make a fetch request to update the backend data
  //   // fetch("/api/updateTestFeed", {
  //   //   method: "POST",
  //   //   body: JSON.stringify(updatedTestFeed),
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //   },
  //   // });
  // };

  // const handleReport = (postId) => {
  //   const updatedPosts = posts.map((post) => {
  //     if (post.id === postId) {
  //       return { ...post, reports: post.reports + 1 };
  //     }
  //     return post;
  //   });
  //   setPosts(updatedPosts);
  // };

  const handleComment = (postId, comment, user) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [
            ...post.comments,
            { user: user.username, comment, replies: [] }
          ]
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleReply = (postId, commentIndex, reply, user) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const updatedComments = [...post.comments];
        if (updatedComments[commentIndex]) {
          updatedComments[commentIndex].replies.push({
            user: user?.username,
            comment: reply,
          });
        }
        return { ...post, comments: updatedComments };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleLikeComment = (postId, commentIndex) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const updatedComments = [...post.comments];
        updatedComments[commentIndex].likes += 1;
        return { ...post, comments: updatedComments };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleShare = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, shares: post.shares + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
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
    <>
      {loading ? (
        <div>Loading...</div>
      ) : filteredPosts.length !== 0 ? (
        <div className={Post.postContainer}>
          <div className={Post.postList}>
            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                currentUser={currentUser}
                liked={post.liked}
                saved={post.saved}
                reported={post.reported}

                handleLike={handleLike}
                handleUnlike={handleUnlike}

                handleComment={handleComment}
                // handleUncomment={handleUncomment}
                // handleLikeComment={handleLikeComment}
                // handleReplyComment={handleReplyComment}
                // handleUnreplyComment={handleUnreplyComment}
                
                handleSave={handleSave}
                handleUnsave={handleUnsave}
                
                handleShare={handleShare}

                handleReport={handleReport}
                handleUnreport={handleUnreport}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={Post.noResults}>No results found</div>
      )}
    </>
  );
}

FeedPost.propTypes = {
  searchText: PropTypes.string,
  currentUser: PropTypes.object.isRequired,
};

export default FeedPost;

