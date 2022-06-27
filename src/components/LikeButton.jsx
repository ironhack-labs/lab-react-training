import { React, useState } from 'react';

const LikeButton = () => {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [counter, setCounter] = useState(0);
  const [bgColor, setBgColor] = useState(colors[0]);
  const handleClick = () => {
    const newCount = counter + 1;
    setCounter(newCount);
    setBgColor(colors[newCount % colors.length]);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: `${bgColor}`,
          borderRadius: '5px',
          width: '150px',
          height: '75px',
          fontSize: '2rem',
          color: 'white',
        }}
      >{`${counter} Like${counter > 1 ? 's' : ''}`}</button>
    </div>
  );
};

export default LikeButton;
