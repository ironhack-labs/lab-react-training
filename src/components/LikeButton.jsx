import { useState } from 'react';

export default function LikeButton() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('purple');
  const [bgCount, setBgCount] = useState(0);

  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  function handleClick() {
    setCount((prev) => prev + 1);

    if (bgCount < colors.length) {
      setBgCount((prev) => prev + 1);
    } else {
      setBgCount(0);
    }

    setBgColor(colors[bgCount]);
  }

  return (
    <button
      className="LikeButton"
      onClick={handleClick}
      style={{ backgroundColor: bgColor }}
    >
      {count} Likes
    </button>
  );
}
