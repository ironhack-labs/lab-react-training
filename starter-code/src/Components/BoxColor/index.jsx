import React from "react";

function BoxColor(props) {
  const red = props.r;
  const green = props.g;
  const blue = props.b;

  const colorStyle = {
    width: "30vw",
    height: "5vh",
    backgroundColor: `rgb(${red}, ${green}, ${blue})`
  };

  return (
    <div style={colorStyle}>
      <p>
        RGB({red},{green},{blue})
      </p>
    </div>
  );
}

export default BoxColor;
