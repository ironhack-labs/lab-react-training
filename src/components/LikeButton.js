import React, { useState } from 'react';

export default function LikeButton() {
  const [count, setCount] = useState(0);

  const backgroundColorArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <button style={{ backgroundColor: backgroundColorArr[count] }} onClick={increaseCount}>
      {count} Likes
    </button>
  );
}
