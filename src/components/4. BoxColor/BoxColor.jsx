import React from 'react';
import '../4. BoxColor/BoxColor.css';

const BoxColor = (props) => {
  const { r, g, b } = props;
  const backgroundColor = {
    background: `rgb(${r},${g},${b})`,
  };
  let color = 'white'
  if (r === 128) color = "black"
    
  
  return (
    <div className="box__boxColor" style={backgroundColor}>
      <p className="codeColor" style={{color}}>
        rgb(${r},${g},${b})
      </p>
    </div>
  );
};
export default BoxColor;
