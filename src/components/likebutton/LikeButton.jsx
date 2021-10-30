import React, { useState } from 'react';

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red', 'cyan'];

function LikeButton() {
  const [count, setCount] = useState({ amountOfLikes: 0 });
  // const [count, setCount] = useState(0)

  const clickedLike = () => {
    setCount({ amountOfLikes: count.amountOfLikes + 1 });
    // setCount(count + 1)
  };

  const style = {
    backgroundColor: colors[count.amountOfLikes % colors.length],
  };

  // const style = {backgroundColor: colors[count % colors.length]}

  return (
    <>
      <button onClick={clickedLike} style={style}>
        <h2>{count.amountOfLikes} Likes</h2>
        {/* <h2>{count} Likes</h2>*/}
      </button>
    </>
  );
}

export default LikeButton;
