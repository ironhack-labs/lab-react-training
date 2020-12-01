import React from 'react';
import './BoxColor.css';

function BoxColor(props) {
  let divBg = {
    backgroundColor: 'rgb(' + props.r + ', ' + props.g + ', ' + props.b + ')',
    border: '1px solid black',
    padding: '10px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  };

  return (
    <div style={divBg}>
      rgb({props.r},{props.g},{props.b})
    </div>
  );
}

export default BoxColor;
