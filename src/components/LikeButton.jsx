import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("purple");

  const colorsArray = ["purple", "blue", "green", "yellow", "orange", "red"];
  
  const updateState = () => {
    setLikes(likes + 1);
    const nextColorIndex = (colorsArray.indexOf(backgroundColor) + 1) % colorsArray.length;
    setBackgroundColor(colorsArray[nextColorIndex]);
  }

  const buttonStyle = {
    backgroundColor: backgroundColor
  }

  return (
    <div>
      <button onClick={updateState} style={buttonStyle}>{likes} likes</button>
    </div>
  );
}

export default LikeButton;
