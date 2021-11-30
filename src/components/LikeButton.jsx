import React from 'react';
import { useState } from 'react';

export const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const clickHandler = () => setLikes((likes) => likes + 1);

  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  return (
    <button
      onClick={clickHandler}
      style={{
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        color: 'white',
      }}
    >
      {likes} Likes
    </button>
  );
};
