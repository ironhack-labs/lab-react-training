import React, { Component} from 'react';


class BoxColor extends Component {
  render() {
    const { r, g, b } = this.props;
    const divstyle = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
    };
    return (
    <div style={divstyle} className="box-color"><p className="rgb-color-text">rgb({ r }, { g }, { b })</p></div>
    )
  }
}

export default BoxColor;