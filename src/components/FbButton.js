import React from "react";

const FbButton = () => {
  return (
    <div
      class="fb-share-button"
      data-href="http://localhost:3000/post/1595113200"
      data-layout="button"
      data-size="small"
    >
      <a
        target="_blank"
        href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2Fpost%2F1595113200&amp;src=sdkpreparse"
        class="fb-xfbml-parse-ignore"
      >
        Share
      </a>
    </div>
  );
};

export default FbButton;
