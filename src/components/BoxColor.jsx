import React from 'react';




function BoxColor(props) {
  return (
    <div class="box-color" style={{color:`rgba(${props.r}, ${props.g}, ${props.b}`}}>
      <p>rgb({props.r}, {props.g}, {props.b})</p>
    </div>
  );
}

export default BoxColor;
