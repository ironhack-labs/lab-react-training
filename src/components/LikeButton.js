import { useState } from 'react';

function LikeButton(props) {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [likes, setLikes] = useState({ background: 'blue', likes: 0 });

  return (
    <button
      style={{ background: likes.background }}
      onClick={() => {
        setLikes({
          background: colors[Math.floor(Math.random() * colors.length)],
          likes: likes.likes + 1,
        });
      }}
    >
      {props.likes === 1 ? `${likes.likes} Like` : `${likes.likes} Likes`}
    </button>
  );
}

export default LikeButton;
