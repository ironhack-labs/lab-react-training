import React from 'react'

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

export default function Random(props) {
    return (
        <div>
        <h2>Random value between {props.min} and {props.max} => {getRandomIntInclusive(props.min, props.max)}</h2>
      
        </div>
    )
}