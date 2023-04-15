import React from "react";

function BoxColor(props) {
  const { r, g, b } = props;
  const colorString = `rgb(${r}, ${g}, ${b})`;
  const style = {
    backgroundColor: colorString,
    width: "18rem",
    height: "6rem",
    margin: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div className="BoxColor" style={style}>
      {colorString}
    </div>
  );
}

export default BoxColor;
