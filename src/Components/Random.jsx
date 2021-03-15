import React from 'react'
import "./../styles/Random.css";

const Random = (props) => {
  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
  
  return (
    <div className="Random__box">
      Random value between {props.min} and {props.max}: {getRandom(props.min, props.max)}
    </div>
  )
}

export default Random;