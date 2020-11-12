import React from 'react';
import './BoxColor.css';

function BoxColor(props) {
  /* const cardstyle = {
    /*  (props.r, props.g, props.b) */
  /*    backgroundColor: rgb(props.r, props.g, props.b),
  }; */

  return (
    <div
      style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})  ` }}
      className="boxcolor"
    >
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
    </div>
  );
}

export default BoxColor;
