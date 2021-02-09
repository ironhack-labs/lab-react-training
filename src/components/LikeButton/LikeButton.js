import React, { useState } from 'react';

const LikeButton = () => {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [like, setCount] = useState(0);
  const [back, setBack] = useState(colors[0]);
  let [colorOne, setColor] = useState(0);
  const handleClick = (index) => {
    if (colorOne < colors.length - 1) {
      colorOne += 1;
    } else {
      colorOne = 0;
    }
    setColor(colorOne);
    setBack(colors[colorOne]);
    return setCount(like + 1);
  };

  return (
    <article>
      <button onClick={() => handleClick()} style={{ backgroundColor: back }}>
        Like {like}
      </button>
    </article>
  );
};

export default LikeButton;
