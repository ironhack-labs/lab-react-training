import React from 'react';

export default function LikeButton() {
  const [counter, setCounter] = React.useState(0);
  const [colorIndex, setColor] = React.useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  function increment() {
    setCounter(counter + 1);
    setColor(colorIndex + 1);
    if (colorIndex === colors.length - 1) {
      setColor(0);
    }
  }

  return (
    <button onClick={increment} style={{ backgroundColor: colors[colorIndex] }}>
      Likes {counter}
    </button>
  );
}
