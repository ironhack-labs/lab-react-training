import { useState } from 'react';
function LikeButton(props) {
  const [count, setCount] = useState(() => 0);
  const [count2, setCount2] = useState(() => 0);
  return (
    <div className="Liker">
      <button onClick={() => setCount((prevCount) => count + 1)}>
        {count} Likes
      </button>
      <button onClick={() => setCount2((prevCount) => count2 + 1)}>
        {count2} Likes
      </button>
    </div>
  );
}
export default LikeButton;
