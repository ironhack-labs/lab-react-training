import React from 'react'
import '../css/random.css'

//<Random min={1} max={6}/>

const Random = (props) => {
    function randomNumber(min, max) {
      return `Random value between ${min} and ${max} => ${
        Math.floor(Math.random() * (max - min + 1)) + min
      }`;
    }
    return (
      <div className="random" >
        <p>{randomNumber(props.min, props.max)}</p>
      </div>
    );
  };
  export default Random;

