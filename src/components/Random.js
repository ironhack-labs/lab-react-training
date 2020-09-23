import React from 'react';

export default function Random(props) {
  console.log(props);
  const randomValue = Math.floor(Math.random() * props.max + 1);
  return (
    <div className="random-div">
      <p>
        Random Value between {props.min} and {props.max} ={'>'} {randomValue}
      </p>
    </div>
  );
}
