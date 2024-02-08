import { useState } from "react";
import victorPic from "../assets/images/victor.jpg";
import glassesImage from "../assets/images/glasses.png";

const ClickablePicture = () => {
  const [showGlasses, setShowGlasses] = useState(false);

  const handleClick = () => {
    setShowGlasses(!showGlasses);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img
        src={victorPic}
        alt="Victor"
        style={{ width: "200px", height: "200px", cursor: "pointer" }}
        onClick={handleClick}
      />

      {showGlasses && (
        <img
          src={glassesImage}
          alt="Glasses"
          style={{
            position: "absolute",
            top: "70px",
            left: "75px",
            width: "100px",
            height: "50px",
          }}
        />
      )}
    </div>
  );
};

export default ClickablePicture;