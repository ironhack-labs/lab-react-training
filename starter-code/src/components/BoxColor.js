import React from 'react';
import '../css/style.css'


const BoxColor = (props) => {

  let { r, g, b } = props;
  let lineOne = `rgb(${r},${g},${b})`;


  return (
    <div className="box" style={{ backgroundColor: lineOne }}>
      <p> {lineOne}</p>


    </div>
  )
}

export default BoxColor;