import React from 'react';

const BoxColor = (props) => {
  let styles = {
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
  };

  return (
    <div style={styles} className="border-box">
      <h3>
        rgb({props.r},{props.g},{props.b})
      </h3>
    </div>
  );
};

export default BoxColor;