import './index.css';
import { useState } from 'react';

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

export const LikeButton = () => {
  const [color, setColor] = useState('purple');
  const [likeCount, setLikeCount] = useState(0);
  const textLike = (likeCount === 1 ? 'Like' : 'Likes');

  const handleClick = () => {
    setLikeCount((prevlikes)=> prevlikes + 1)
    setColor(colors[likeCount % colors.length]);
  };

  const buttonStyle = {
    backgroundColor: color,
    color: 'white',
  };
  return (
    <div className="LikeButton">
      <button style={buttonStyle} onClick={() => handleClick()}>
        {likeCount} {textLike}
      </button>
    </div>
  );
};
