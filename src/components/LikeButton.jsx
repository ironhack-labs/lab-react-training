import React, { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [colorIndex, setColorIndex] = useState(0);

  const incrementLikes = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  const buttonStyle = {
    backgroundColor: colors[colorIndex],
    padding: '10px',
    borderRadius: '5px',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={incrementLikes}>
      {likes} Likes
    </button>
  );
}

export default LikeButton;
