import React, { useState } from 'react';

function LikeButton() {
    const [likes, setLikes] = useState(0)
    const color = ['purple','blue','green','yellow','orange','red'];

    const handleLike = () => {
        setLikes((prevCount) => prevCount + 1)
    }

    const backgroundColor = color[likes % 6]
    
  return (
    <div>
        <button onClick={handleLike} style={{ backgroundColor: backgroundColor }}>{likes} likes</button>
    </div>
  ) 
}

export default LikeButton;
