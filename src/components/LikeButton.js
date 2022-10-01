import { useState } from 'react';

function LikeButton() {
  const [count, setCount] = useState(0);
  const [colorChange, setColorChange] = useState('purple');
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  return (
    <div className="like-btn">
      <button
        style={{ background: colorChange }}
        onClick={() => {
          setCount(count + 1);
          setColorChange(colors[count % colors.length]);
        }}
      >
        {count} Likes
      </button>
    </div>
  );
}
export default LikeButton;
