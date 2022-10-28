import { useState } from 'react';

function LikeButton({ text }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button style={{ padding: '5px', margin: '10px' }} onClick={handleClick}>
      {count} {text}
    </button>
  );
}
export default LikeButton;
