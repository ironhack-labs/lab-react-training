import { useState } from 'react';

function LikeButton() {
  const bgColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const [indexOfColor, setIndexOfColor] = useState(0);

  function likeCounter() {
    setNumberOfLikes(numberOfLikes + 1);
    setIndexOfColor((indexOfColor + 1) % bgColors.length);
  }

  return (
    <div>
      <button
        onClick={likeCounter}
        style={{
          color: 'white',
          background: bgColors[indexOfColor],
          fontSize: '2rem',
          fontWeight: 'bold',
          borderRadius: '5px',
          padding: '1rem 1.6rem',
          margin: '1rem auto 3rem',
        }}
      >
        {numberOfLikes} Likes
      </button>
    </div>
  );
}

export default LikeButton;
