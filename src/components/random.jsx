import React from 'react';
import './idcard.css';

const Random = (props) => {
  let min = props.min;
  let max = props.max;
  let random = Math.floor(Math.random() * (max + min - 1)) + min;

  return (
    <div className="idcardStyle">
      <p>
        Random value between {min} and {max} => {random}
      </p>
    </div>
  );
};

export default Random;
