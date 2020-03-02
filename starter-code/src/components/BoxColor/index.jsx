import React from 'react';
import './style.scss';

const BoxColor = props => {
  // const { r, g, b } = this.props;
  const divstyle = {
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`
  };
  return (
    <div className="box-color" style={divstyle}>
      <h3>
        rgb({props.r},{props.g},{props.b})
      </h3>
    </div>
  );
};

export default BoxColor;
