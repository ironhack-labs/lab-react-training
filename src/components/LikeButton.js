import React from 'react';
import { useState } from 'react';

function LikeButton() {
  let colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  let [count, setCount] = useState(0);
  return (
    <div>
      <button
        style={{ backgroundColor: colors[count % 6] }}
        onClick={() => setCount(count + 1)}
      >
        {count} Likes
      </button>
    </div>
  );
}
export default LikeButton;
