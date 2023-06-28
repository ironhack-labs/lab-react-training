import { useState } from 'react';

export default function LikeButton() {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [color, setColor] = useState(colors[0]);
  const [colorIndex, setColorIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  const handleColorAndCounter = () => {
    setCounter(counter + 1);
    if (colorIndex < colors.length - 1) {
      setColorIndex(colorIndex + 1);
    } else {
      setColorIndex(0);
    }
    setColor(colors[colorIndex]);
  };
  const backColor = { backgroundColor: `${color}` };

  return (
    <button style={backColor} onClick={() => handleColorAndCounter()}>
      {counter} Likes
    </button>
  );
}
