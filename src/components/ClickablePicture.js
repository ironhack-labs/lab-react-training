import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <img
      className="clickable-img"
      src={isClicked ? imgClicked : img}
      alt="clicked"
      onClick={handleClick}
    />
  );
}

export default ClickablePicture;
