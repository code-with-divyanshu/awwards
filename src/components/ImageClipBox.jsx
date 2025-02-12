import React from "react";

const ImageClipBox = ({ src, clipClass }) => {
  return (
    <div className={clipClass}>
      <img src={src} />
    </div>
  );
};

export default ImageClipBox;
