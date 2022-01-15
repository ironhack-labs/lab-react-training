import React from 'react';
import './Random.css';

const Random = (props) => {
  const {min, max} = props;
  const randomNumber = Math.round(Math.random() * (max - min) + min);
  
  return (
    <div className="random-wrapper">
      <p>Random value between {min} and {max} ={'>'} {randomNumber}</p>
      {/* to use > we need to grab it into curly braces and string {'>'} */}
    </div>
  )
}

export default Random;