import React from 'react';



const Random = (props) => {

    let min = props.min
    let max = props.max
    let randomValue = Math.floor(Math.random()*(max-min)+min)

  return (
  <div>
    <div><p>Random value between {props.min} and {props.max} = {randomValue}</p></div>
  </div>);

};

export default Random;