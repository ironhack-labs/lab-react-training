import React from 'react';

const Random = (props) => {
  
    let randomNumber = 0;
    
    props.max === 100 ? randomNumber = Math.floor(Math.random()*100) : randomNumber = Math.floor(Math.random()*6);
  
  return (
    <p>{`Random value between ${props.min} and ${props.max} => ${randomNumber}`}</p>
  )
}

export default Random;