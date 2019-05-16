import React, { useState } from "react";

const ClickablePicture = ({ img, imgClicked }) => {
  const [image, setImage] = useState(img);
  return (
    <div>
      <img
        className="image is-96x96"
        onClick={() => {
          let next = image;
          if (next === img) next = imgClicked;
          else next = img;
          setImage(next);
        }}
        src={image}
        alt="pic"
      />
    </div>
  );
};

export default ClickablePicture;
