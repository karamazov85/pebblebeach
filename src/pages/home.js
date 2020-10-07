import React from "react";
import PostList from "../components/PostList";
import Featured from "../components/Featured";
import "./pages.css";

const Home = () => {
  return (
    <div className="postlist-container">
      <Featured />
      <PostList />
    </div>
  );
};

export default Home;
