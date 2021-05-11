import React from 'react';
import '../App.css';

function LikeButton() {
  const [likesCount, setLikesCount] = React.useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const addLike = () => {
    setLikesCount(likesCount + 1);
  };

  return (
    <div>
      <button
        onClick={addLike}
        style={{
          backgroundColor: colors[likesCount],
        }}
      >
        {likesCount} like{likesCount !== 1 ? 's' : ''}
      </button>
    </div>
  );
}

export default LikeButton;
