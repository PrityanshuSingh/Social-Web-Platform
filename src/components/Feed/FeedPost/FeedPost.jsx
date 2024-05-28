import { useState } from "react";
import PostCard from "../PostCard/PostCard";
import Post from "./styles/FeedPost.module.css";
import TestFeed from "../../../data/TestFeed.json";

function FeedPost() {
  const [posts, setPosts] = useState(TestFeed);

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
    <div className={Post.postContainer}>
      <div className={Post.postList}>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            handleComment={handleComment}
            handleLike={handleLike}
            handleShare={handleShare}
          />
        ))}
      </div>
    </div>
  );
}

export default FeedPost;
