import React, { useState } from 'react';

function LikeButton() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={increment}>{count} likes</button>
    </div>
  );
}

export default LikeButton;
