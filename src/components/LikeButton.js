import React, { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <button class="likeButton" onClick={handleLikeClick}>Like</button>
      <p>{likes} likes</p>
    </div>
  );
}

export default LikeButton;