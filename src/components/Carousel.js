import React, { useState } from 'react';
import '../css/App.css';

export default function Carousel({ imgs }) {

    const [Index, setIndex] = useState(0)

    function increment () {
        setIndex(Index + 1);
        if(Index > 2) setIndex(0)
    }

    function decrement () {
        setIndex(Index - 1);
        if(Index < 1) setIndex(3)
    }

  return (
  <div>
    <img src={imgs[Index]} alt="Carousel"/>
    <button id='left' onClick={decrement}>Left</button> 
    <button id='right' onClick={increment}>Rigth</button>
  </div>
  )
}
