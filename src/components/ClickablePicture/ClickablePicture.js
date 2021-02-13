import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [image, setImage] = useState(img);
  const changeImg = (actual) => {
    const newImg = img === image ? setImage(imgClicked) : setImage(img);
  };
  return (
    <div>
      <img src={image} alt="person" onClick={changeImg} />
    </div>
  );
};

export default ClickablePicture;
