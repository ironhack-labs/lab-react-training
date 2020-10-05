import React from "react";

//ITERATION 4

function BoxColor(props) {
    return (
      <div>
        <div
          style={{
            backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
            height: props.height,
            width: props.width,
            color: props.color,
          }}
        >
          <p>
            RGB ({props.r}, {props.g}, {props.b})
          </p>
        </div>
        <div
          style={{
            backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
            height: props.height,
            width: props.width,
          }}
        ></div>
      </div>
    );
  }
  
 
  
export default BoxColor;
