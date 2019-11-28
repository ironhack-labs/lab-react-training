import React from "react";

export default function BoxColor(props) {
  const colorStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    height: "50px"
  };
  return (
    <div style={colorStyle} className="box">
      <p>{colorStyle.backgroundColor}</p>
    </div>
  );
}
