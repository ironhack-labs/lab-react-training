import React from "react";

const BoxColor = props => {
  return (
    <div
      className="Flex just-cont"
      style={{ backgroundColor: "rgb(props.r,props.g,props.b)" }}
    >
      <p className="text-center">
        rgb({props.r}, {props.g}, {props.b})
      </p>
      <p className="text-center">#</p>
    </div>
  );
};

export default BoxColor;
