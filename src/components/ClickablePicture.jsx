import React, { useState } from "react";

function ClickablePicture({ img, imgClicked }) {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <div className="clickablePictureContainer">
      <img
        src={img}
        alt="Background"
        className="backgroundImage"
      />
      <img
        src={imgClicked}
        alt="Clickable Picture"
        className={`overlayImage ${isClick ? "visible" : "hidden"}`}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default ClickablePicture;
