import React from 'react'
import './random.css';

const Random = ({min, max}) => {
    
    let rand = min + (Math.floor(Math.random()*(max-min))); 
    { 
    return ( 
      <div className='div-random'> 
     <h3> A random number between {min} and {max}  is: {rand} </h3> 
     </div> )

}};



export default Random;