import React from "react";
import "./index.css";

function BoxColor({r, g, b}) {
  const backGround = `rgb(${r}, ${g}, ${b})`;
  const StyleBoxColor = {background : backGround}
  return (
      <div className='BoxColor' style={StyleBoxColor}>
          {backGround}
      </div>
  )
}

export default BoxColor