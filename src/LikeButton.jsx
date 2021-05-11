import React from 'react';
import './LikeButton.css';

function LikeButton() {
  const [likes, setLikes] = React.useState(0);
  function addLike() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <button class="LikeButton" onClick={addLike}>
        {likes} Like me!
      </button>
    </div>
  );
}

export default LikeButton;
