import React from 'react';

function LikeButton({ likes, setLikes }) {
  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>{likes} Likes</button>
    </div>
  );
}

export default LikeButton;
