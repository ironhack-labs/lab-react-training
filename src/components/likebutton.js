import React, { useState } from 'react';

export default function LikeButton() {
  let [likes, setLikes] = useState(0);

  const handleLike = () => setLikes(likes++);

  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const style = {
    backgroundColor: `${colors[likes % 6]}`,
  };

  return (
    <div className="likes">
      <button style={style} onClick={handleLike}>
        Likes: {likes}
      </button>
    </div>
  );
}
