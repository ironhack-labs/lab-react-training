import React, { useState } from 'react';

function LikeButton() {
  const [counter, setCounter] = useState(0); // adentro del useState tambien pueden ir arrow functions para ir a consultar datos al backend
  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <button
        onClick={() => setCounter(increment)}>{`${counter} Likes`}</button>
    </div>
  );
}

export default LikeButton;
