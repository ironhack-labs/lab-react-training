import { useState } from 'react';

export default function LikeButton() {
  //State
  const [likeCounter, setLikeCounter] = useState(0);
  // Colors
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleClick = function () {
    setLikeCounter((prevlikeCounter) => prevlikeCounter + 1);
  };

  const RandomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div>
      <button onClick={handleClick} style={{ backgroundColor: RandomColor }}>
        {likeCounter}
        {likeCounter > 0 && likeCounter > 1 ? ' Likes' : ' Like'}
      </button>
    </div>
  );
}
