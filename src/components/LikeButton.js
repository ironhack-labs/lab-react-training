import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleLikeClick = () => {
    setLikes(likes + 1);
    setBackgroundColorIndex((backgroundColorIndex + 1) % colors.length);
  };

  const buttonStyle = {
    backgroundColor: colors[backgroundColorIndex],
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleLikeClick}>
        {likes} Like{likes !== 1 && 's'}
      </button>
    </div>
  );
};

export default LikeButton;
