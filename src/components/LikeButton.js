// ./src/components/Counter.js
import React, { useState } from 'react';

function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <div className="LikedButton">
     

      <p>{count} {count === 1 ? "like": "likes"}</p>

      <button onClick={() => setCount((count) => count + 1)}> Likes </button>
    
    </div>
  );
}

export default LikeButton;