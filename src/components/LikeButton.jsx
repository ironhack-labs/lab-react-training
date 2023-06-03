import { useState } from 'react';

export default function LikeButton() {
  const [color, setColor] = useState([
    'purple',
    'blue',
    'green',
    'yellow',
    'orange',
    'red',
  ]);
  const [counter, setCounter] = useState(0);
  const handleColorAndCounter = () => {
    setCounter(counter++);
  };

  return <button>{counter} Likes</button>;
}
