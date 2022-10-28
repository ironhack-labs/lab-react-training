import { useState } from 'react';

function LikeButton({ text }) {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('rgba(255,100,50,0.5)');

  function getRandomColor() {
    const random255 = () => {
      return Math.floor(Math.random() * 255);
    };
    return `rgba(${random255()},${random255()},${random255()},0.5)`;
  }

  function handleClick() {
    setCount(count + 1);
    setBgColor(getRandomColor());
  }

  return (
    <button
      style={{ padding: '5px', margin: '10px', backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {count} {text}
    </button>
  );
}
export default LikeButton;
