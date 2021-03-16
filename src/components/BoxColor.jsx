import React from "react";

function BoxColor(props) {
  console.log(props);
  let backGround ={
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
    height:200,
  }

  return (
   
      <div style={backGround}>rgb({props.r},{props.g},{props.b})</div>
  );
}

export default BoxColor;