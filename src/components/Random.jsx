import React from 'react';

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function Random(props) {
    return (
        <div>
            <p class="borderClass">Random value between {props.min} and {props.max} = {getRandom(props.min, props.max)}</p>
        </div>
    )
}

export default Random