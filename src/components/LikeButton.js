import { useState } from 'react';

function LikeButton() {
  const [countUp, setCountUp] = useState(0);

  return (
    <button className="like-button" onClick={() => setCountUp(countUp + 1)}>
      {`${countUp}`} Likes
    </button>
  );
}

export default LikeButton;
