import React, { useState } from 'react';

function LikeButton() {
  const [value, setValue] = useState(0);

  function add() {
    setValue(value + 1);
  }
  return (
    <div>
      <button onClick={add}>{value} Likes</button>
    </div>
  );
}

export default LikeButton;
