import { useState } from "react";

function LikeButton(){
  const [likes, setLikes] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [colorIndex, setColorIndex] = useState(0);

  const incrementLikes = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  const buttonStyle = {
    backgroundColor: colors[colorIndex],
  };

  return (
    <div>
      <button style={buttonStyle} onClick={incrementLikes}>
        {likes} Like{likes !== 1 ? 's' : ''}
      </button>
    </div>
  );
};

export default LikeButton;