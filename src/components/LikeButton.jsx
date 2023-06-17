import { useState } from 'react';

export default function LikeButton(props) {
  const [likes, setLikes] = useState(0);
  const allColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const [bgColor, setBgColor] = useState(allColors[0]);

  const handleClick = () => {
    setLikes(likes + 1);
    setBgColor(allColors[allColors.indexOf(bgColor) + 1]);
  };
  return (
    <button
      style={{ backgroundColor: bgColor, color: 'white' }}
      onClick={handleClick}
    >
      {likes} Likes
    </button>
  );
}
