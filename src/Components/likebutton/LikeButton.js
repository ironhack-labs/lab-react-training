import React from 'react';

export default function LikeButton() {
  const [counter, setCounter] = React.useState(0);
  const [colorIndex, setColor] = React.useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const clearState = () => {
    setColor(0);
  };

  function increment() {
    setCounter(counter + 1);
    setColor(colorIndex + 1);
    if (colorIndex === colors.length - 1) {
      clearState();
    }
  }

  return (
    <button onClick={increment} style={{ backgroundColor: colors[colorIndex] }}>
      Likes {counter}
    </button>
  );
}
