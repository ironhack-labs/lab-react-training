import React, { useState } from 'react';

function LikeButton() {
  const [count, setCount] = useState({ amountOfLikes: 0 });

  const clickedLike = () => {
    setCount({ amountOfLikes: count.amountOfLikes + 1 });
  };

  return (
    <>
      <button onClick={clickedLike}>
        <h2>{count.amountOfLikes} Likes </h2>
      </button>
    </>
  );
}

export default LikeButton;
