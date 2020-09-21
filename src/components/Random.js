import React from 'react';
import './Random.css';

const Random = props => {

  // generate random number
  const min = props.min;
  const max = props.max;
  const randomNum = Math.floor(Math.random() * (max - min) + min); 
  const message = `Random value betweenn ${min} and ${max} => ${randomNum}`;

  return (
    <article className='random__box'>
      <div className='random__line'>
        <p>{message}</p>
      </div>
    </article>  
  )
}

export default Random;