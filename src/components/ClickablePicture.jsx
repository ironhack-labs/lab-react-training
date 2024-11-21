import { useState } from "react";

function ClickablePicture({ img, imgClicked }) {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    console.log("Image clicked! Current isToggled value:", isToggled);
    setIsToggled(!isToggled);
    console.log("New isToggled value:", !isToggled);
  };

  const styles = {
    container: {
      position: "relative",
      display: "inline-block",
    },
    image: {
      width: "400px",
    },
    glassImage: {
      position: "absolute",
      width: "300px",
      left: "25px",
      bottom: "175px",
    },
  };

  return (
    <div style={styles.container}>
      <img
        src={img}
        style={styles.image}
        alt="image"
        onClick={handleClick}
      ></img>
      {isToggled && (
        <img src={imgClicked} alt="glasses" style={styles.glassImage}></img>
      )}
    </div>
  );
}

export default ClickablePicture;
