import React from 'react'
import { useState } from 'react';

function LikeButton() {
   
        const [counter, setCounter] = useState(0);
        const incrementCount = () => setCounter(counter + 1);
        const decrementCount = () => setCounter(counter -1)
        console.log(counter)
        
        
      
      

  return (
    <div>
    <button style={{backgroundColor: 'rgb(128, 255, 0)'}}
    
    onClick={incrementCount}
     
    
  >
    <p>Likes {counter}</p>
    Like button
  </button>
  <button style={{backgroundColor: 'red'}}
    
    onClick={decrementCount}
     
    
  >
    <p>Likes {counter}</p>
    Dislike button
  </button>
  </div>
  )
}

export default LikeButton