import { useState } from 'react';

function LikeButton() {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  let [likeNumbers, setlikeNumbers] = useState(0);

  function handleIncrementClick(event) {
    setlikeNumbers(likeNumbers + 1);
  }

  return (
    <div className="like-btn">
      <button
        onClick={handleIncrementClick}
        style={{ backgroundColor: colors[likeNumbers % colors.length] }}
      >
        {likeNumbers} Likes
      </button>
    </div>
  );
}

export default LikeButton;
