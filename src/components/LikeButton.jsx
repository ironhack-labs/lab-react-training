import React, { useState } from 'react';

function LikeButton(props) {
  const [counter, setCount] = useState(0);
  const colors = ['purple','blue','green','yellow','orange','red'];
  const style = {
    backgroundColor: colors[counter % 5]
  };
  return (
    <button className='LikeButton' onClick={() => setCount(counter + 1)} style={style}>
      {counter} Likes
    </button>
  );
}

export default LikeButton;
