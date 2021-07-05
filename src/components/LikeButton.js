import { useState } from 'react';

const LikeButton = () => {
  const [bgColor, setBgColor] = useState('purple');
  const [likes, setLikes] = useState(0);

  const addLikeAndChangeColor = () => {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const rand = Math.floor(Math.random() * colors.length);
    setBgColor(colors[rand]);
    setLikes(likes + 1);
  };

  return (
    <button
      type="button"
      onClick={addLikeAndChangeColor}
      style={{ backgroundColor: bgColor }}
    >
      {likes} likes
    </button>
  );
};

export default LikeButton;
