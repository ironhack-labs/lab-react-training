import React from 'react'
import { useState } from 'react';

function LikeButton() {
  const [likeButton, setLikeButton] = useState(0);

  const handleCountIncrease = () => {
    setLikeButton(likeButton + 1);
  }

  return (
    <div>
      <button onClick={handleCountIncrease}> {likeButton} likes</button>
    </div>
  )
}

export default LikeButton