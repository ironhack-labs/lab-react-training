import { useState } from 'react';

export default function LikeButton() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');
  const valueColor = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const handleClick = () => {
    // if (count === 0) {
    //   setColor(valueColor[0]);
    // } else if (count === 1) {
    //   setColor(valueColor[1]);
    // } else if (count === 2) {
    //   setColor(valueColor[2]);
    // } else if (count === 3) {
    //   setColor(valueColor[3]);
    // } else if (count === 4) {
    //   setColor(valueColor[4]);
    // } else if (count === 5) {
    //   setColor(valueColor[5]);
    // }
    setColor((color + 1) % valueColor.length);
    setCount(count + 1);
  };
  return (
    <div>
      <button
        style={{
          background: valueColor[color],
          width: '100px',
          height: '50px',
        }}
        onClick={handleClick}
      >
        {count} Likes
      </button>
    </div>
  );
}
