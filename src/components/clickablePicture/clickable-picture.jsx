import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {

  const [isClicked, setIsClicked] = useState(false);

  const toggleImage = () => {
    setIsClicked(!isClicked);
  };

  const imageUrl = isClicked ? imgClicked : img;

  return (
    <div>
      <img
        src={imageUrl}
        alt="Clickable Picture"
        onClick={toggleImage}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default ClickablePicture;