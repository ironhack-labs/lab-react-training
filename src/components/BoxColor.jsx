import React from 'react';

const boxColor = (props) => {
  return (
    <div
      style={{
        width: '300px',
        height: '50px',
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
      }}
    ></div>
  );
};

export default boxColor;
