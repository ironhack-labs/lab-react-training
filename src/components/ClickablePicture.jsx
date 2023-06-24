import React from 'react';
import { useState } from 'react';

function ClickablePicture(props) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="clickablePic">
      <img
        src={isClicked ? props.imgClicked : props.img}
        alt=""
        onClick={handleClick}
      />
    </div>
  );
}

export default ClickablePicture;
