import React, { useState } from 'react';

const LikeButton = () => {
    const [likes, setLikes] = useState(0);
    const [bgColorIndex, setBgColorIndex] = useState(0);
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  
    const incrementLikes = () => {
      setLikes(likes + 1);
      setBgColorIndex((bgColorIndex + 1) % colors.length);
    };
  
    const buttonStyle = {
      backgroundColor: colors[bgColorIndex],
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    };
  
    return (
      <div>
        <button onClick={incrementLikes} style={buttonStyle}>
          {likes} {likes <= 1 ? 'Like' : 'Likes'}
        </button>
      </div>
    );
  };
  
  export default LikeButton;