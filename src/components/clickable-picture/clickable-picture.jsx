import React, { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div onClick={handleClick}>
      <img src={isClicked ? imgClicked : img} alt="Clickeable" />
    </div>
  );
}

export default ClickablePicture;