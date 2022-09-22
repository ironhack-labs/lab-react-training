import React from 'react';
import {useState} from 'react'


function Carousel({images}) {

    const [state, setState] = useState(0);

    function leftButton() {
        setState(state === 0 ? images.length - 1 : state - 1)
    }    
    function rightButton() {        
        setState(state === images.length -1 ? 0 : state + 1)
    }

  return (<div>
    <button onClick={leftButton}>Left</button>

    <img src={images[state]} alt="" />
    <button onClick={rightButton}>Right</button>
  </div>)
}

export default Carousel;
