import React from 'react';
import { useState } from 'react';

function LikeButton() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button className="like-btn" onClick={() => setCount(count + 1)}>
        {count} Likes
      </button>
    </div>
  );
}

export default LikeButton;
