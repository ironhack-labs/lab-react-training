import React from 'react';

const LikeButton = () => {
  const color = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <button onClick={handleClick} style={{ backgroundColor: color[count] }}>
      {count} Likes
    </button>
  );
};

export default LikeButton;
