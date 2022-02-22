import { useState } from 'react';
import './LikeButton.css';

function LikeButton() {
  let [countValue, setCountValue] = useState(0);

  return (
    <div className="likeButton">
      <button onClick={() => setCountValue(countValue + 1)}>
        {countValue} likes
      </button>
    </div>
  );
}

export default LikeButton;
