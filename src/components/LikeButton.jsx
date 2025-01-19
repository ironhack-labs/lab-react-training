import React, { useState } from 'react';

function LikeButton({ initialLikes = 0, 
    colorArray = ["purple", "blue", "green", "yellow", "orange", "red"] }) {
    // State to keep track of the number of likes and the color index
    const [likes, setLikes] = useState(initialLikes);
    const [colorIndex, setColorIndex] = useState(0);
  
    // Function to handle button click
    const handleClick = () => {
      setLikes(likes + 1);
      setColorIndex((colorIndex + 1) % colorArray.length); // Loop through colors
    };
  
    return (
      <button
        onClick={handleClick}
        style={{
          backgroundColor: colorArray[colorIndex],
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '5px',
        }}
      >
        {likes} Likes
      </button>
    );
  }
  
  export default LikeButton;