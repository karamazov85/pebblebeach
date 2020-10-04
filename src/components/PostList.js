import React from "react";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import { GoQuote } from "react-icons/go";
import postlist from "../posts.json";
import "./postlist.css";

const PostList = () => {
  // const excerptList = postlist.map((post) => {
  //   return post.content.split(" ").slice(0, 10).join(" ");
  // });

  return (
    <div className="postlist">
      {postlist.length &&
        postlist.map((post, i) => {
          return (
            <Link className="links" to={`/post/${post.id}`}>
              <div key={post.id} className="post-card">
                <div className="post-card-text-container">
                  <h2 className="postlist-post-title">{post.title}</h2>
                  <div className="quote-teaser-container">
                    <h1 className="quote-sign">
                      <GoQuote />
                    </h1>
                    {/* <Markdown source={excerptList[i]} escapeHtml={false} /> */}
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
