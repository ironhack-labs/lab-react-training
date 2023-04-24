import React from 'react';
import { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState('purple');

  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const addLike = () => {
    setLikes((prevLikes) => prevLikes + 1);

    colors.forEach((arrayColor, index) => {
      if (color === arrayColor) {
        if (index === colors.length - 1) {
          setColor(colors[0]);
        } else {
          setColor(colors[index + 1]);
        }
      }
    });
  };

  return (
    <div>
      <button
        className="m-2 text-light"
        style={{ backgroundColor: color }}
        onClick={addLike}
      >
        {likes} {likes === 1 ? <span>Like</span> : <span>Likes</span>}
      </button>
    </div>
  );
};

export default LikeButton;
