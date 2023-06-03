import React from 'react';
import { useState } from 'react';

function ClicablePicture({ img, imgClicked }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div>
      <img src={isClicked ? imgClicked : img} alt="" onClick={handleClick} />
    </div>
  );
}

export default ClicablePicture;
