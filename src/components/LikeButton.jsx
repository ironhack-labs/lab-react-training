import { useState } from 'react';

function LikeButton() {
  const [count, setCount] = useState(0);

  const colorsArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const buttonCounter = () => {
    return setCount(count + 1);
  };

  return (
    <div style={{ padding: '20px', margin: '0px' }}>
      <button
        style={{
          padding: '10px',
          margin: '0px',
          color: 'white',
          backgroundColor: colorsArray[count % 6],
        }}
        onClick={buttonCounter}
      >
        {count} Likes
      </button>
    </div>
  );
}

export default LikeButton;
