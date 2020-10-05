import React from 'react';




function BoxColor(props) {
  return (
    <div className="box-color" style={{backgroundColor:`rgba(${props.r}, ${props.g}, ${props.b}`}}>
      <p>rgb({props.r}, {props.g}, {props.b})</p>
    </div>
  );
}

export default BoxColor;
