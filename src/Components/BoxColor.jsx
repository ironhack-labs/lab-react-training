import React from "react";

const BoxColor = (props) => {
  const { r, g, b } = props;
  const bgColor = `rgb(${r}, ${g}, ${b})`;

  const style = {
    backgroundColor: bgColor,
    width: "200px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    border: "1px solid black",
  };

  return (
    <div className="box-color" style={style}>
      {bgColor}
    </div>
  );
};

export default BoxColor;
