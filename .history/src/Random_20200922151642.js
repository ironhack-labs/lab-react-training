import React from 'react';
import './Random.css';

function Random(props) {
  const randomN = Math.round(
    Math,
    random() * (props.max - props.min) + props.min
  );
  return (
    <div className="Random">
      <p>
        Random value between {props.min} and {props.max} --> {props.randomN}
      </p>
    </div>
  );
}

export default Random;
