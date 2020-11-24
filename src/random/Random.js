import React from 'react';

function Random(props) {
    let randomNum = Math.floor(Math.random() * props.max) + props.min;
   
    return (
      <div className="randomNumber">
          <p>
            Random value between {props.min} and {props.max} => {randomNum}
          </p>
        </div>
    );
  }


export default Random;
