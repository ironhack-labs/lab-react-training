import React, { useState } from 'react';
import './likebutton.css'

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleClick = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  const style = { backgroundColor: colors[colorIndex] };

  return (
   
        <button className='btn-lg' onClick={handleClick} style={style}>
        {likes} Likes
        </button>

  );
}

export default LikeButton;