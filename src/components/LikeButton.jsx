import { useState } from 'react';

const LikeButton = () => {
  // const yes = {
  //   backgroundColor: 'purple',
  // };

  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const [like, setLike] = useState(0);
  const [color, setColor] = useState(colors[0]);

  const clickButton = () => {
    setLike(like + 1);

    setColor(color);
  };

  return (
    <div>
      <button onClick={clickButton} style={{ backgroundColor: `${color}` }}>
        {like} Likes
      </button>
    </div>
  );
};

export default LikeButton;
