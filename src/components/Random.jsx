import React from 'react';
import '../App.css';

function Random(props) {
  const { min, max } = props;
  const random = Math.floor(Math.random() * (max - min) + min);
  return (
    <div>
      <p>
        Random value between {min} and {max} {'>'} {random}
      </p>
    </div>
  );
}

export default Random;
