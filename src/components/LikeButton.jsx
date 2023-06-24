import { useState } from 'react';

function LikeButton() {
  const [likeNum, setLikeNum] = useState(0);
  const [color, setColor] = useState('purple');
  const changeColor = () => {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const currentColor = colors.indexOf(color);
    setColor(colors[currentColor + 1]);
  };
  return (
    <div>
      <button
        onClick={() => {
          setLikeNum(likeNum + 1);
          changeColor();
        }}
        style={{ backgroundColor: color, color: 'white' }}
      >
        {likeNum} Likes
      </button>
    </div>
  );
}

export default LikeButton;
