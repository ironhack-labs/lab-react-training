import React from 'react';

function Random (props) {
  const random = Math.round(Math.random() 
                 * (Number(props.max) - Number(props.min)))
                 + props.min; 
  return (
    <div className="random border">
      <p>Random value between {props.min} and {props.max} => {random}</p>
    </div>
  );
}

export default Random;