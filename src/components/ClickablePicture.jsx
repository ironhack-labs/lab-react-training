import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const pictureStyle = {
    width: '300px',
    height: '300px',
    cursor: 'pointer'
  };

  return (
    <img
      className="clickable-picture"
      src={isClicked ? imgClicked : img}
      alt="Clickable"
      style={pictureStyle}
      onClick={handleClick}
    />
  );
};

export default ClickablePicture;

