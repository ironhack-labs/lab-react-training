import React from 'react';

const Random =(props)=>{
    const {min, max} = props
    
    const RandomNumber = Math.floor((Math.random() * max) + min) ;
        
    
    return (
       <p>Random value between {RandomNumber}</p>
    
      
    )
    }
    
    export default Random;