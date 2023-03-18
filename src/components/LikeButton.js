import React, { useState } from 'react';

function LikeButton() {
  const [likeCount, setLikeCount] = useState(0);
  
  const handleLikeUp = () => {
    setLikeCount(prev => prev + 1);
  };
  
  return (
    <button onClick={handleLikeUp} className="rounded-md bg-blue-500 text-white px-4 py-3 ml-5 m-4 ">
      {likeCount}
    </button>
  );
}

export default LikeButton;