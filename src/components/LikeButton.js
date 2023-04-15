import React, { useState } from "react";

const LikeButton = () => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("purple");
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    const colorIndex = newCount % colors.length;
    setBgColor(colors[colorIndex]);
  };

  return (
    <button
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {count} Likes
    </button>
  );
};

export default LikeButton;
