import React from 'react';
import PropTypes from 'prop-types';

const BoxColor = (props) => {
  const boxStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    height: '100px',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div class="box" style={boxStyle}>
      `#{props.r.toString(16)}
      {props.g.toString(16)}
      {props.b.toString(16)}`
    </div>
  );
};

BoxColor.propTypes = {};

export default BoxColor;
