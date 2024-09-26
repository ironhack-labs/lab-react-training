import { useState } from 'react';

function LikeButton() {
  const [count, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(count + 1);
  };

  return (
    <div>
      <button onClick={handleCounter}> {count} Likes</button>
    </div>
  );
}

export default LikeButton;
