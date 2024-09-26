import { useState } from 'react';
function LikeButton(props) {
  let i = 0;
  const colour = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [count, setCount] = useState(() => 0);
  const [count2, setCount2] = useState(() => 0);
  const [color, setColor] = useState(colour[i]);
  console.log(colour[i]);
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
