import React from 'react';
import { useState } from 'react';

export const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const likesButton = () => {
    const backgroundColorBtn = document.querySelector('.like-btn');

    backgroundColorBtn.style.backgroundColor =
      colors[Math.round(Math.random() * colors.length)];
    return setLikes(likes + 1);
  };

  return (
    <div>
      <button className="like-btn" onClick={likesButton}>
        {likes} likes
      </button>
    </div>
  );
};
