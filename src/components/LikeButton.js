import React, { useState } from 'react';

import '../styles/LikeButton.css';

const LikeButton = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('purple');

  const addLikes = () => {
    setCount(count => count + 1);
  };

  const changeColor = () => {
    let colors = ['purple','blue','green','yellow','orange','red'];
    let newRandomColor = colors[Math.floor(Math.random() * color.length)];
    setColor(newRandomColor);
  }

  //funçao para chamar as duas funçoes do botao, juntas no mesmo click:
  const allInClick = () => {
    addLikes();
    changeColor();
  }


  return (
    <div>
      <button
        className="add-number"
        onClick={allInClick}
        style={{ backgroundColor: color }}
      >
        {count} Likes
      </button>
    </div>
  );
};

export default LikeButton;
