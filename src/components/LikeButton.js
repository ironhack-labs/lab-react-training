import React, { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    // likes++;
    return setLikes(likes + 1);
  };

  return (
    <div>
      <button
        style={{
          padding: '5px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
        }}
        onClick={handleClick}
      >
        {likes} Likes
      </button>
    </div>
  );
}

export default LikeButton;
