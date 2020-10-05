import React from "react";
import { GoQuote } from "react-icons/go";
import { Link } from "react-router-dom";
import "./featured.css";
import postlist from "../posts.json";

const Featured = () => {
  const featuredPost = postlist.find((post) => post.featured === "true");
  const featuredText = featuredPost.teaser;
  console.log(featuredText);
  return (
    <div className="featured-container">
      <div className="featured-text">
        <h1 className="featured-quote-sign">
          <GoQuote />
        </h1>
        <div className="featured-body-with-link">
          <p className="featured-body">{featuredText}</p>
          <Link to={`/post/${featuredPost.id}`}>
            <p className="featured-link">Read poem...</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
