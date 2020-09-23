import React from 'react';
import './Random.css';

function Random(props) {
  return (
    <div className="picCard">
      <img src={props.picture} />
      <div className="Random">
        <p></p>
      </div>
    </div>
  );
}

export default Random;
