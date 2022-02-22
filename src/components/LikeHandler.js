import React from 'react';
import { useState } from 'react';

export default function LikeHandler() {
  const [count, setCount] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [background, colorSetter] = useState(colors[0]);

  const setCountHandler = () => {
    setCount(count + 1);
    const index = colors.indexOf(background);
    colorSetter((background) => {
      if (background === colors[index]) {
        background = colors[index + 1];
      }
      return background;
    });
  };
  return (
    <button
      style={{ backgroundColor: `${background}` }}
      onClick={setCountHandler}
    >
      {count}Likes
    </button>
  );
}
