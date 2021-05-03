import React from 'react';

export default function Random(props) {
  var random = Math.floor(Math.random() * props.max) + props.min  
  return (
    <div className='Random'>
      <h1>Random value between {props.min} and {props.max} = {random}</h1>
    </div>
  );
}