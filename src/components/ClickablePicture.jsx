import React, { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle the state on click
  };

  return (
    <div>
      {/* Emily image */}
      <img
        src={isClicked ? imgClicked : img}
        alt="Emily"
        onClick={handleClick}
      />
    </div>
  );
}

export default ClickablePicture;
