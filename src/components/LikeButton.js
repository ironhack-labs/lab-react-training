import React, { useState } from 'react';

const LikeButton = () => {
  const [count, setCount] = useState(0);
  const [colorCount, setColorCount] = useState(0);
  const colorArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  return (
    <>
      <button
        className="margin-all"
        style={{
          height: '1.5rem',
          width: '80px',
          backgroundColor: `${colorArray[colorCount]}`,
        }}
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
          setColorCount((prevCount) => {
            if (colorCount >= colorArray.length - 1) {
              setColorCount(0);
              return colorCount;
            }
            return prevCount + 1;
          });
        }}
      >
        {' '}
        {count} Likes{' '}
      </button>
    </>
  );
};

export default LikeButton;
