import { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  
  const colors = [
    'purple',
    'blue',
    'green',
    'yellow',
    'orange',
    'red'
  ];

  const handleLike = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <div className="d-flex justify-content-center my-3">
      <button onClick={handleLike} style={{ backgroundColor: colors[colorIndex] }}>{likes} Likes</button>
    </div>
  )
}

export default LikeButton;