import { useState } from "react";

function ClickablePicture({ img, imgClicked }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div>
      <img
        src={isClicked ? imgClicked : img}
        alt="Clickable"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default ClickablePicture;
