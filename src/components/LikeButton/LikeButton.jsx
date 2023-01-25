import { useState } from 'react';
import './LikeButton.css';

function LikeButton() {
  const [likeCounter, setLikeCounter] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  function handleLikeCounter() {
    setLikeCounter((initialCount) => initialCount + 1);
  }

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="like-btn">
      <button
        onClick={handleLikeCounter}
        style={{ backgroundColor: randomColor }}
      >
        {likeCounter}
        {likeCounter > 1 ? ' Likes' : ' Like'}
      </button>
    </div>
  );
}

export default LikeButton;
