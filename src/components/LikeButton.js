import React from 'react';
import { useState } from 'react';

const initialColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

function LikeButton() {
  const [likes, setLikes] = useState(0);
//   const [color, setColor] = useState(initialColors[0]);

  function addLikes() {
    setLikes(likes + 1); // async
    // const count = likes % initialColors.length;
    // setColor(initialColors[count]);
  }

  return (
    <button onClick={addLikes} style={{ backgroundColor: initialColors[likes % initialColors.length] }}>
      {' '}
      Number of like{likes === 1 ? '' : 's'} : {likes}
    </button>
  );
}

export default LikeButton;
