import React, { Component } from "react";

class Boxcolor extends Component {
  render() {
    const props = this.props;
    const boxStyle = {
      backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
      height: "40px"
    };
    return (
      <div style={boxStyle}>
        <p>{boxStyle.backgroundColor}</p>
      </div>
    );
  }
}

export default Boxcolor;
