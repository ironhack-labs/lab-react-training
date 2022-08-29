import { useState } from 'react'

import './LikeButton.css';

function LikeButton({ className }) {
  const colors = ['purple','blue','green','yellow','orange','red'];

  const [count, setCount] = useState(0);
  const countUp = () => setCount(countPrev => countPrev + 1);

  return (
    <div className="like-button">
      <button className={`btn btn-primary ${className}`} style={{
        backgroundColor: colors[(count % colors.length)],
        color: 'white'
      }} onClick={countUp}>
      {count} Likes!
      </button>
    </div>
  );
}

export default LikeButton;