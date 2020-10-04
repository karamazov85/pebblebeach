import React from "react";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import "./WhatsappButton.css";

const WhatsappButton = ({ postUrl, postTitle }) => {
  const shareUrl = postUrl;
  const title = postTitle;

  return (
    <div className="whatsapp-share">
      <WhatsappShareButton url={shareUrl} title={title} separator={":: "}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default WhatsappButton;
