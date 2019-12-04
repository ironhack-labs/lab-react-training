import React from 'react';
import { Random } from '../styles/components';

function RandomComponent (props) {
    let max = props.max;
    let min = props.min;
    let randomValue = 0;
    randomValue = Math.floor(Math.random() * ( max - min) + min);

    return(
        <Random>
          <p>Random value between {props.min} and {props.max} => {randomValue}</p>
        </Random>
      );
}

export default RandomComponent;