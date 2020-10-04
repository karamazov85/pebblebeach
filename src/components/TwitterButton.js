import React from "react";
import { TwitterShareButton, TwitterIcon } from "react-share";
import "./TwitterButton.css";

const TwitterButton = ({ postUrl, postTitle }) => {
  const shareUrl = postUrl;
  const title = postTitle;

  console.log("url", shareUrl, "title", title);

  return (
    <div className="twitter-share">
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
    </div>
  );
};

export default TwitterButton;
