import React from 'react'
import { useState } from 'react';

function LikeButton() {
   
        const [count, setCount] = useState(0);
        const incrementCount = () => setCount(prevCount => prevCount + 1);
 
        const decrementCount = () => setCount(prevCount => prevCount -1);
        console.log(count)
        
        
      
      

  return (
    <div>
    <button style={{backgroundColor: 'rgb(128, 255, 0)'}}
    
    onClick={incrementCount}
     
    
  >
    <p>Likes {count}</p>
    Like button
  </button>
  <button style={{backgroundColor: 'red'}}
    
    onClick={decrementCount}
     
    
  >
    <p>Likes {count}</p>
    Dislike button
  </button>
  </div>
  )
}

export default LikeButton