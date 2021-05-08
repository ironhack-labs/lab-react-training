import React from 'react';


const BoxColor = (props) => {

  return (
    <div
      style={{
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        padding: '20px',
        margin: '10px',
        border: '2px solid black',
      }}
    >
      <p>
        RGB ({props.r}, {props.g}, {props.b})
      </p>
    </div>
  );
};

export default BoxColor;
