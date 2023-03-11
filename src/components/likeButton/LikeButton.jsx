import { useState } from 'react';
import './likeButton.css';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState('grey');

  let likeText;
  switch (likes) {
    case 1:
      likeText = 'Like';
      break;

    default:
      likeText = 'Likes';
      break;
  }

  const buttonStyle = {
    backgroundColor: `${color}`,
  };

  const handleLikes = () => {
    setLikes((prev) => prev + 1);

    const colorsArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const randomColor =
      colorsArray[Math.floor(Math.random() * colorsArray.length)];

    setColor(randomColor);
  };

  return (
    <div className="button-container">
      <button onClick={handleLikes} style={buttonStyle}>
        {likes} {likeText}
      </button>
    </div>
  );
};

export default LikeButton;
