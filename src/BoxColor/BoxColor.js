import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;

  return (
    <div
      style={{
        border: 'solid black 1px',
        margin: '0.8% auto',
        padding: '1.6%',
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        textAlign: 'center',
        color: `${props.children === '#ff0000' ? 'white' : null}`,
      }}
    >
      rgb({r},{g},{b})<br />
      {props.children}
    </div>
  );
}

export default BoxColor;
