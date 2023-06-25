import { useState } from 'react';

export default function LikeButton() {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const [color, setColor] = useState('');
  const [count, setCount] = useState(0);
  const handleClick = () => {
    const newColor = Math.floor(Math.random() * colors.length);
    setCount(count + 1);
    setColor(colors[newColor]);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: `${color}`,
          width: '100px',
          height: '50px',
          marginBottom: '10px',
        }}
        onClick={handleClick}
      >
        Likes {count}
      </button>
    </div>
  );
}
