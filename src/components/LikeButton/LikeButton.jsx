import React, { useState } from 'react';
import './LikeButton.css';

const LikeButton = () => {
  const [count, setCount] = useState(0);
  const [r, setR] = useState();
  const [g, setG] = useState();
  const [b, setB] = useState();

  const counterHandler = () => {
    setCount((count) => count + 1);
    colorchanger();
  };

  const colorchanger = () => {
    setR(Math.floor(Math.random() * 10) * 25);
    setG(Math.floor(Math.random() * 10) * 25);
    setB(Math.floor(Math.random() * 10) * 25);
  };

  return (
    <div className="buttondiv">
      <button
        style={{ backgroundColor: `rgb(${r},${g},${b})` }}
        onClick={() => counterHandler()}
        className="button"
      >
        {count} likes
      </button>
    </div>
  );
};

export default LikeButton;
