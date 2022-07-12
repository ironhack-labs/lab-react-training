import React from 'react';
import { useState } from 'react';

function LikeButton() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('#f3f3f3');

  function handleCount() {
    setCount(count + 1);
    console.log(count);
  }

  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setColor(color);
  }

  function handleButtonClick() {
    handleCount();
    getRandomColor();
  }
  /* 
  function handleButtonClick() {
    setTimeout(() => {
      handleCount();
      getRandomColor();
    }, 3000);
  } */

  return (
    <>
      <p>{count}</p>
      <button
        onClick={handleButtonClick}
        style={{
          backgroundColor: color,
          borderStyle: 'none',
          padding: '1rem',
          width: '30%',
          borderRadius: '10px',
        }}
      >
        Counting up 🤭
      </button>
    </>
  );
}

export default LikeButton;
