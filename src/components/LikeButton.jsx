import React, { useState } from 'react';
const color = ['purple','blue','green','yellow','orange','red']

const LikeButton = () => {
    const [Like, setLike] = useState(0);
    const [Like2, setLike2] = useState(0);

  return (
    <div className="Like">
    <h2>Like</h2>

    <button onClick={() => setLike(Like + 1)}> { Like }  {Like === 0 || Like ===1 ? `Like` : `Likes`} </button>
    <button onClick={() => setLike2(Like2 + 1)}> { Like2 } {Like2 === 0 || Like2 ===1 ? `Like` : `Likes`}</button>

  </div>
  )
};

export default LikeButton;
