import React, { useState } from 'react';

function LikeButton(props) {
  const [likeButton, setLikeButton] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const color = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  function increment() {
    setLikeButton(likeButton + 1);
    setColorIndex(colorIndex + 1);
    if (setColorIndex === color.length - 1) {
      setColorIndex(0);
    }
  }

  return (
    <div>
      <button
        onClick={increment}
        style={{ backgroundColor: color[colorIndex] }}
      >
        {likeButton}Likes
      </button>
    </div>
  );
}

export default LikeButton;
