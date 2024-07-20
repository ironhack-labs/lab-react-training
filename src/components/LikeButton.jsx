import { useState } from "react";



function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [colorCount, setColorCount] = useState(0);
  const [color, setColor] = useState("purple");

  const incrementLikes = () => {
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
    setLikes(likes + 1);
    setColorCount(colorCount +1);
    setColor(colors[(colorCount + 1) % colors.length]);
  };

  return (
    <>
      <button
        style={{ backgroundColor: color, color: "white" }}
        onClick={() => incrementLikes()}
    >
        {likes} Like 
      </button>
    </>
  );
}

export default LikeButton;
