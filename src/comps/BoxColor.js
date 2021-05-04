// imports
import React from 'react';
import styled from 'styled-components';

//components
class BoxColor extends React.Component {
  rgbToHex(component) {
    let hex = Number(component).toString(16);
    if (hex.length < 2) {
      hex = '0' + hex;
    }
    return hex;
  }

  render() {
    const { r, g, b } = this.props;
    // Styled components
    const BoxColorDiv = styled.div`
      border: 1px solid black;
      margin: 10px;
      background-color: rgb(${r}, ${g}, ${b});
    `;
    return (
      <BoxColorDiv>
        <p>
          rgb({r},{g},{b})
        </p>
        <p>{this.rgbToHex(r) + this.rgbToHex(g) + this.rgbToHex(b)}</p>
      </BoxColorDiv>
    );
  }
}

// exports
export default BoxColor;
