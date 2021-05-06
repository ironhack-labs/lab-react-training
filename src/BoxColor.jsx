import React from 'react';
import './BoxColor.css';

function BoxColor(props) {
  const { a, b, c } = props;
  return (
    <div
      className="BoxColor"
      style={{
        backgroundColor: `rgb(${a}, ${b}, ${c})`,
        border: '1px solid black',
        margin: '3px',
        width: '100%',
        height: '150px',
      }}
    ></div>
  );
}

export default BoxColor;
