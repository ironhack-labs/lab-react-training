import React from 'react';
import P from 'prop-types';


const Random = ({min,max})=>{
  let rando = min+(Math.floor(Math.random()*(max-min)));
  return(
    <div className = 'random-container' style={{border: '1px solid black', padding: '10px'}}>
        <h5>A random number between {min} and {max}  is: {rando}</h5>
    </div>
  )
}

export default Random;