import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [colorIndex, setColorIndex] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  const buttonStyle = {
    backgroundColor: colors[colorIndex],
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <button className="like-button" style={buttonStyle} onClick={handleLikeClick}>
      {likes} Likes
    </button>
  );
};

export default LikeButton;