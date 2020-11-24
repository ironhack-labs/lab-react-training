import React from 'react';

const BoxColor = (props) => {
  const toHEX = (color) => {
    return color.toString(16).length === 1
      ? '0' + color.toString(16)
      : color.toString(16);
  };

  return (
    <div
      className="border border-dark px-2 my-2 text-center"
      style={{
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        color: 'white',
      }}
    >
      rgb({props.r},{props.g},{props.b}) <br />#{toHEX(props.r)}
      {toHEX(props.g)}
      {toHEX(props.b)}
    </div>
  );
};

export default BoxColor;
