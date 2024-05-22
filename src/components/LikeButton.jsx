// LikeButton.js

import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [colorIndex, setColorIndex] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  const buttonStyle = {
    backgroundColor: colors[colorIndex],
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    color: 'white',
    cursor: 'pointer',
    margin: '10px',
  };

  return (
    <button style={buttonStyle} onClick={handleLike}>
      {likes} Likes
    </button>
  );
};

export default LikeButton;
