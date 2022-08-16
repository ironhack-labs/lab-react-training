import './LikeButton.css';
import React, { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLikesIncrease = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <button className="likes-btn" onClick={handleLikesIncrease}>
        {likes} likes
      </button>
    </div>
  );
}

export default LikeButton;
