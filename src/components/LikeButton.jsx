import React from 'react';

function LikeButton(props) {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [counter, setCounter] = React.useState(0);

  const handleLike = () => {
    return setCounter(counter + 1);
  };

  return (
    <div>
      <button
        onClick={handleLike}
        style={{
          background: `${colors[counter]}`,
        }}
      >
        {counter} Likes
      </button>
    </div>
  );
}

export default LikeButton;
