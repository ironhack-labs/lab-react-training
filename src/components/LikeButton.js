import { useState } from 'react';

function LikeButton() {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [color, setColor] = useState('white');
  const [likes, setLikes] = useState(0);
  function handleClick() {
    console.log('click');
    setColor(colors[Math.floor(Math.random() * colors.length)]);
    setLikes((old) => old + 1);
  }

  return (
    <span>
      <button onClick={handleClick} style={{ backgroundColor: color }}>
        {likes} Likes
      </button>
      <br />
    </span>
  );
}

export default LikeButton;
