import React from 'react';
import '../css/style.css'


const Random = (props) => {

  let { min, max } = props;

  let randomNums = (min, max) => Math.floor(Math.random() * (max - min) + min);

  let result = randomNums(min, max);

  return (
    <div className="box">
      <h5> Random value between {min} and {max} => {result} </h5>
    </div>
  )
}

export default Random