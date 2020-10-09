import React from "react";
import { Link } from "react-router-dom";
import { GoQuote } from "react-icons/go";
import postlist from "../posts.json";
import "./postlist.css";

const PostList = () => {
  return (
    <div className="postlist">
      {postlist.length &&
        postlist.map((post) => {
          return (
            <Link className="link" to={`/post/${post.id}`}>
              <div key={post.id} className="post-card">
                <div className="post-card-text-container">
                  <h2 className="postlist-post-title">{post.title}</h2>
                  <div className="quote-teaser-container">
                    <div className="quote-sign-container">
                      <GoQuote />
                    </div>
                    <div>
                      <p className="teaser">{post.teaser}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default PostList;
