import React, { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <img
      src={clicked ? imgClicked : img}
      alt="Clickable"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    />
  );
}

export default ClickablePicture;
