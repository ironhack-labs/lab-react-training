import { useState } from 'react';
const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

function LikeButton() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <button
        className="w-25"
        style={{
          backgroundColor: colors[counter % colors.length],
          color: 'white',
        }}
        onClick={handleClick}
      >
        {counter} Likes
      </button>
    </div>
  );
}

export default LikeButton;
