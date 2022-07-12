import React from 'react';
import {useState} from 'react';

export default function LikeButton() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('gray')
    const colorArray = ['purple','blue','green','yellow','orange','red'];
    function handleClick(){
      const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)]
       setCount(count + 1);
       setColor(randomColor)
    }

  return (
    <button style={{backgroundColor: color}} onClick={handleClick}>{count} Likes</button>
    
  )
}
