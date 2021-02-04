import React, { useState } from 'react';
import '../css/App.css';

export default function LikeButtonHook() {
  const [index, setIndex] = useState(0);
  const [Color, setColor] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const buttonStyle = {
    backgroundColor: colors[Color > 4 ? 5 : Color],
  };

  function increment() {
    setIndex(index + 1);
    setColor(Color + 1);
    console.log(Color);
    if (Color > 4) {
      setColor(0);
    }
  }
  return (
    <div className="likeCont">
      <button style={buttonStyle} onClick={increment}>
        {index} Likes
      </button>
    </div>
  );
}
