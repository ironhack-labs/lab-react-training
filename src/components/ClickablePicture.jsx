import React, { useState } from "react";

const ClickablePicture = ({ img, imgClicked }) => {
  const [showGlasses, setShowGlasses] = useState(false);

  const handleClick = () => {
    setShowGlasses(!showGlasses);
  };

  const handleGlassesClick = () => {
    handleClick(); 
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }} onClick={handleClick}>
      <img
        src={img}
        alt="Main Picture"
        style={{ width: "50%", height: "auto" }}
      />
      {showGlasses && (
        <img
          src={imgClicked}
          alt="Glasses"
          style={{
            position: "absolute",
            top: 50,
            left: 170,
            width: "50%",
            height: "auto",
            cursor: "pointer",
          }}
          onClick={handleGlassesClick}
        />
      )}
    </div>
  );
};

export default ClickablePicture;
