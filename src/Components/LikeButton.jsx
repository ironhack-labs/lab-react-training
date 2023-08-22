import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleLikeClick = () => {
    const nextColorIndex = (colorIndex + 1) % colors.length;
    setColorIndex(nextColorIndex);
    setLikes(likes + 1);
  };

  const buttonStyle = {
    backgroundColor: colors[colorIndex],
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button className="like-button" style={buttonStyle} onClick={handleLikeClick}>
      {likes} Likes
    </button>
  );
};

export default LikeButton;
