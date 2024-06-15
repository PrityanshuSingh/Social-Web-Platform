import { useState, useEffect } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import FeedPost from "../../components/Feed/FeedPost/FeedPost";
import Feed from "./styles/Feed.module.css";

function FeedFrame() {
  const [searchParams] = useSearchParams(); // Get the search params from the URL
  const [searchText, setSearchText] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = {
    id: 456, // Replace with the current user's ID
  };

  useEffect(() => {
    const tagname = searchParams.get("search_query");
    if (tagname) {
      setSearchText(tagname);
      setSearchInput(tagname);
    }
  }, [searchParams]);

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchText(searchInput);
      const basePath = location.pathname.split('/results')[0]; // remove existing search segment if present
      const newPath = searchInput ? `${basePath}/results?search_query=${searchInput}` : basePath;
      navigate(newPath);
    }
  };

  const handleSearchClick = () => {
    setSearchText(searchInput);
    const basePath = location.pathname.split('/results')[0]; // remove existing search segment if present
    const newPath = searchInput ? `${basePath}/results?search_query=${searchInput}` : basePath;
    navigate(newPath);
  };

  return (
    <>
      <div className={Feed.feedContainer}>
        <div className={Feed.feedHeader}>
          <div className={Feed.feedTitle}>Feed</div>
          <div className={Feed.searchBar}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/df75adcba95c8294ebbd5017b35167490e53974445121e4a1a734a517a05b002?apiKey=4aa0ae1a0e814437847f3f8ff6c4ef38&"
              className="img"
              onClick={handleSearchClick}
              style={{ cursor: "pointer" }}
            />
            <input
              type="text"
              placeholder="Search tags"
              value={searchInput}
              onChange={handleSearchChange}
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>
        <FeedPost searchText={searchText} currentUser={currentUser}/>
      </div>
    </>
  );
}

export default FeedFrame;
