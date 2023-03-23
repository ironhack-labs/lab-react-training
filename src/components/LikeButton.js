import React, { useState } from 'react';

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

function LikeButton() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button
      className='btn'
      style={{ backgroundColor: colors[count % colors.length], color: 'nothing' }}
      onClick={handleClick}
    >
      {count} Likes
    </button>
  );
}

export default LikeButton;



