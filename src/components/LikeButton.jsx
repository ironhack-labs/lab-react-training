import React from 'react';

function LikeButton(props) {
  const [likeNum, setLikeNum] = React.useState(0);
  const backgroundColors = [
    'purple',
    'blue',
    'green',
    'yellow',
    'orange',
    'red',
  ];

  let singular = false;
  if (likeNum === 1) {
    singular = true;
  }

  return (
    <button
      className="likeButton"
      style={{ background: backgroundColors[likeNum % 6] }}
      onClick={() => {
        setLikeNum(likeNum + 1);
      }}
    >
      {likeNum} Like{!singular && <span>s</span>}
    </button>
  );
}

export default LikeButton;
