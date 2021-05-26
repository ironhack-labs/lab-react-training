import React from 'react';

export default function Random(props) {
  return (
    <>
      <div className="container tabla">
        Random value between {props.min} and {props.max} =>{' '}
        {Math.floor(Math.random() * (props.max - props.min) + props.min)}
      </div>
      <br />
    </>
  );
}