import { useState } from 'react';
import './LikeButton.css'

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <div className="LikeButton">
        <button onClick={() => setLikes(likes + 1)}>{likes} Likes</button>
      </div>
    </div>
  );
}

export default LikeButton;
