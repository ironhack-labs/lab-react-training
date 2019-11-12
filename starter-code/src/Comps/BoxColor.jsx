import React from "react";

export default function BoxColor(props) {
  let color = "rgb(" + props.r + "," + props.g + "," + props.b + ")";
  return (
    <div className="rec" style={{ backgroundColor: color }}>
      <h3>{color}</h3>
    </div>
  );
}
