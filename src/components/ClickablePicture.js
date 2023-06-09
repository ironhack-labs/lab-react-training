import React, { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
      };
  return (
    <img
    src={isClicked ? imgClicked : img}
    alt={isClicked ? 'Clicked Picture' : 'Regular Picture'}
    onClick={handleClick}
  />
 
  )
}

export default ClickablePicture