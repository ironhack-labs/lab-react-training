import React from 'react';

export default function BoxColor(props) {
  let style = {
    width: '100vw',
    height: '100px',
    backgroundColor: 'rgb(' + props.r + ',' + props.g + ',' + props.b + ')',
  };
  return <div style={style}>DIV</div>;
}
