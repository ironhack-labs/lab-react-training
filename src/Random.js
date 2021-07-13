import React from 'react';

function Random({ min, max}) {
  
    
let randomNumber = Math.floor((Math.random() * max) + min);

  return ( <p>The random number is: {randomNumber}</p>)


}


export default Random;