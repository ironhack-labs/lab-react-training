import React from "react";

const BoxColor = props => {
  const divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
  };
  return (
    <div className="Flex just-cont" style={divStyle}>
      <p className="text-center">
        rgb({props.r}, {props.g}, {props.b})
      </p>
      <p className="text-center">#</p>
    </div>
  );
};

export default BoxColor;
