import React from 'react';
import '../App.css';

function BoxColor(props) {
  const style = {
    border: 'solid black 1px',
    background: `rgb(${props.r},${props.g},${props.b})`,
    height: '100px',
  };

  return (
    <div className="box-color" style={style}>
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
    </div>
  );
}

export default BoxColor;
