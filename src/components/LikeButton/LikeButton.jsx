import React, { useState } from 'react';
import './LikeButton.css';

const LikeButton = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="likeBtn-container">
      <button
        type="button"
        className="likeBtn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count} Likes
      </button>
    </div>
  );
};

export default LikeButton;
