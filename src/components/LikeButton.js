import { useState } from 'react';

const colorArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red', 'teal'];

function LikeButton() {
  const [count, setCount] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
        setColorIndex(colorIndex + 1);
        setIsActive(true);
      }}
      style={{
        backgroundColor: colorArr[colorIndex % colorArr.length],
        padding: '5px',
        margin: '5px',
        boxShadow: isActive ? '0px 0px 40px teal' : 'none',
      }}
    >
      {count}
      {count !== 1 ? ' Likes' : ' Like'}
    </button>
  );
}

export default LikeButton;
