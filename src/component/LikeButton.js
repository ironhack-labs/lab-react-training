import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [bgColor, setBgColor] = useState(colors[0]);

  const handleClick = () => {
    setLikes(likes + 1);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <button style={{ backgroundColor: bgColor }} onClick={handleClick}>
      {likes} Likes
    </button>
  );
};

export default LikeButton;
