import React, { useState } from 'react';
import './LikeButton.css';

function LikeButton() {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [likes, setLikes] = useState(0);

  const likesButton = () => {
    setLikes(likes + 1);
  }

  const like = likes === 1 ? 'Like' : 'Likes'


  return (
    <div>
      <button onClick={likesButton} className='likebutton-button' style={{backgroundColor: colors[likes % 6]}}>{likes} {like}</button>
    </div>
  );
}

export default LikeButton;