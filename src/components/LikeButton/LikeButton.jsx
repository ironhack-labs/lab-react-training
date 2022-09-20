import { useState } from 'react';
import './LikeButton.css';

function LikeButton() {
  const [count, setCount] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  return (
    <button
      style={{ backgroundColor: colors[count % colors.length] }}
      onClick={() => setCount(count + 1)}
      className="like-button"
    >
      {count} Likes
    </button>
  );
}

export default LikeButton;
