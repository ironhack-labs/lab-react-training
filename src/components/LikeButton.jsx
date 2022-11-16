import { useState } from 'react';

function LikeButton() {
  const color = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const [likes, setCount] = useState(0);
  const like = () => {
    setCount(likes + 1);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: color[Math.abs(likes % color.length)] }}
        onClick={like}
      >
        {' '}
        {likes} Likes{' '}
      </button>
    </div>
  );
}

export default LikeButton;
