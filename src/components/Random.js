import React from 'react'
import './Random.css';

export default function Random(props) {
    const randomNumber =
    props.min + Math.floor(Math.random() * (props.max - props.min));
  return (
      <p className='randomCard'>
          <h1>Random value between {props.min} and {props.max} {"=>"} {randomNumber}</h1>
      </p>
    
  )}

