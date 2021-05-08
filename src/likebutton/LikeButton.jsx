import React, { useState } from 'react';
import './LikeButton.css';

const LikeButton = () => {
  const [like, setLike] = useState(0);

  const handleIncrementClick = () => setLike(like + 1);

  const getRandomNum = () =>{
    return Math.floor(Math.random() * 255)
  }

  const getRandomColor = () =>{
    const r = getRandomNum(), g = getRandomNum(), b = getRandomNum()
    return `${r},${g},${b}`
  }

  return (
    <div>
      <button style={{ backgroundColor: `rgb(${getRandomColor()})`}}   onClick={handleIncrementClick} > { like } Likes</button>
    </div>
  )
}

export default LikeButton;