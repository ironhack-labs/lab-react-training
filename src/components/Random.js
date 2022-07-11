import React from 'react'

export default function Random(props) {
const  getRandomArbitrary = (min, max)  => {
    return Math.floor(Math.random() * (max - min) + min);
  }
    
 return (
   <div>
   <p>Random value between {props.min} and {props.max} => {getRandomArbitrary(props.min, props.max)}</p>
   </div>
 )
}

