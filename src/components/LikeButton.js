import { useState } from 'react';
function LikeButton() {
  const [likes, setLikes] = useState(0);
  function update(sum) {
    const newLike = likes + sum;
    if (newLike >= 0) setLikes(newLike);
  }
  return (
    <div className="LikeButton">
      <p>
        <button onClick={() => update(1)}>Likes: {likes}</button>
      </p>
    </div>
  );
}

export default LikeButton;
