import React from 'react';

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

function LikeButton() {
  const [counter, setCounter] = React.useState(0);
  // 👆Assigning state to the counter. Starting value -> 0. SetCounter -> func that will udate the State.
  const [likesNumber, setLikesNumber] = React.useState('0 Likes');

  function likesHandler() {
    setCounter(counter + 1);

    if (counter === 1) {
      setLikesNumber(`${counter} Likes`);
    } else {
      setLikesNumber(`${counter} Likes`);
    }
  }

  return (
    <div>
      <button
        style={{
          background: `${colors[counter]}`,
        }}
        onClick={likesHandler}
      >
        {likesNumber}
      </button>
    </div>
  );
}

export default LikeButton;
