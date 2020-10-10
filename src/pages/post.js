import React from "react";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Markdown from "react-markdown";
import postlist from "../posts.json";
import "./post.css";
import FacebookButton from "../components/FacebookButton";
import TwitterButton from "../components/TwitterButton";
import WhatsappButton from "../components/WhatsappButton";

const Post = ({ match }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validId = parseInt(match.params.id);

  if (!validId) {
    return <Redirect to="/404" />;
  }
  let postExists = false;

  const fetchedPost = {};

  postlist.forEach((post) => {
    if (validId === post.id) {
      fetchedPost.title = post.title ? post.title : "No title";
      fetchedPost.date = post.date ? post.date : "No date";
      fetchedPost.author = post.author ? post.author : "No author";
      fetchedPost.content = post.content ? post.content : "No content";

      postExists = true;
    }
  });

  if (!postExists) {
    return <Redirect to="/404" />;
  }

  const postUrl = "https://pebblebeach.herokuapp.com" + match.url;

  return (
    <div className="post">
      <div className="poem-container">
        <h2 className="poem-title">{fetchedPost.title}</h2>
        <br />
        <Markdown
          className="poem-body"
          source={fetchedPost.content}
          escapeHtml={false}
        />
        <div className="poem-share-container">
          <FacebookButton postUrl={postUrl} postQuote={fetchedPost.title} />
          <TwitterButton postUrl={postUrl} postTitle={fetchedPost.title} />
          <WhatsappButton postUrl={postUrl} postTitle={fetchedPost.title} />
        </div>
      </div>
    </div>
  );
};

export default Post;
