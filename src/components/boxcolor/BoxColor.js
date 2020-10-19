import React from 'react';
import styled from 'styled-components';

export default function BoxColor(props) {
  const backgrStyle = {
    backgroundColor: `rgba(${props.r}, ${props.g}, ${props.b})`,
  };

  return (
    <div style={backgrStyle}>
      <div style={props.style}>
        <p>
          rgb({props.r}, {props.g}, {props.b} )
        </p>
      </div>
    </div>
  );
}


