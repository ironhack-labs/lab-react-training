import React from 'react';

const BoxColor = (props) => {
    const color = `rgb(${props.r}, ${props.g}, ${props.b})`
  return (
    <div className="box-color" style={{backgroundColor: color}}>
      <h1>rgb({props.r}, {props.g}, {props.b})</h1>
    </div>
  );
};

export default BoxColor;
