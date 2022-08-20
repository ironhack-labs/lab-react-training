
import React, { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const moreLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <button className="likes-btn" onClick={moreLikes}>
        {likes} 1LikeMore
      </button>
    </div>
  );
}

export default LikeButton;