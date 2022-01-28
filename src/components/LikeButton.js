import React from 'react';
import { useState } from 'react';
import '../styles/LikeButton.css'

const LikeButton = () => {
    const[count, setCount] = useState(0);
    const[color, setColor] = useState('purple');
   

    const addNumber = () => {    
    setCount((count) => (count += 1))
    }

    const changeColor = () => {
        let colors = ['purple','blue','green','yellow','orange','red'];    //pode ser mudança com condicional ou aleatória também    
        let newColor = colors[Math.floor(Math.random()* (colors.length - 1))]  //cor aleatória
        setColor(newColor);
      }
        
    const changesButton = () => {      //função chamando as outras duas funções do meu onClick do button
        addNumber();
        changeColor();
    }

  return (
  <div>
      <button className='add-number' onClick={changesButton} style={{backgroundColor: color}}>{count} Likes</button>
  </div>
  );
};

export default LikeButton;