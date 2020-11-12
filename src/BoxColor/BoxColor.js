import React from 'react';

function BoxColor(props) {
  return (
    <div
      style={{
        border: 'solid black 1px',
        margin: '0.8% auto',
        padding: '1.6%',
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        textAlign: 'center',
        color: `${props.children === '#ff0000' ? 'white' : null}`,
      }}
    >
      rgb({props.r}, {props.g}, {props.b})<br />
      {props.children}
    </div>
  );
}

export default BoxColor;
