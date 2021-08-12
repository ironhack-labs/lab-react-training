import React, { Component } from 'react';
import BoxColor from './BoxColor';
import SingleColorPicker from './SingleColorPicker';

export class RGBColorPicker extends Component {
  state = {
    r: 255,
    g: 255,
    b: 255,
  };

  callBack = (color, value) => {
    const pickedColorValue = value > 255 ? 255 : value < 0 ? 0 : value;

    if (color === 'r') {
      this.setState({ r: pickedColorValue });
    } else if (color === 'g') {
      this.setState({ g: pickedColorValue });
    } else if (color === 'b') {
      this.setState({ b: pickedColorValue });
    }
  };

  render() {
    return (
      <div style={{ textAlign: 'left', marginLeft: '20px' }}>
        <SingleColorPicker
          color="r"
          callBack={this.callBack}
          value={this.state.r}
        />
        <SingleColorPicker
          color="g"
          callBack={this.callBack}
          value={this.state.g}
        />
        <SingleColorPicker
          color="b"
          callBack={this.callBack}
          value={this.state.b}
        />
        <div style={{ display: 'flex' }}>
          <div
            style={{
              backgroundColor: `rgb(${this.state.r},${this.state.g},${this.state.b})`,
              width: '30px',
              height: '30px',
              border: '1px solid black',
            }}
          ></div>

          <span>
            rgb({this.state.r},{this.state.g},{this.state.b})
          </span>

          <BoxColor r={this.state.r} g={this.state.g} b={this.state.b} />
        </div>
      </div>
    );
  }
}

export default RGBColorPicker;
