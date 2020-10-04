import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";
import "./FacebookButton.css";

const FacebookButton = ({ postUrl, postQuote }) => {
  const shareUrl = postUrl;
  const quote = postQuote;
  console.log(shareUrl);

  return (
    <div className="fb-share">
      <FacebookShareButton url={shareUrl} quote={quote}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
  );
};

export default FacebookButton;
