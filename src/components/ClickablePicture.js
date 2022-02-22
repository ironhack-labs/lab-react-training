import React from 'react';
import { useState } from 'react';

export default function ClickablePicture({ img, imgClicked }) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((clicked) => !clicked);
  };

  return (
    <div>
      {!clicked ? (
        <img src={img} alt="imgs" onClick={handleClick} />
      ) : (
        <img src={imgClicked} alt="imgs" onClick={handleClick} />
      )}
    </div>
  );
}
