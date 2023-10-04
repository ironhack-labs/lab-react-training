/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [bgColorIndex, setBgColorIndex] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleLikeClick = () => {
    setLikes(likes + 1);
    setBgColorIndex((bgColorIndex + 1) % colors.length);
  };

  const buttonStyle = {
    backgroundColor: colors[bgColorIndex],
    padding: '10px 20px',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleLikeClick}>
        {likes} Likes
      </button>
      
    </div>
  );
};

export default LikeButton;
