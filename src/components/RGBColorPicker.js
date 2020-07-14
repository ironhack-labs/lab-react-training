import React, { Component } from 'react';
import SingleColorPicker from './SingleColorPicker';

class RGBColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rValue: 255,
      gValue: 255,
      bValue: 255,
    };
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(value, color) {
    if (color === 'r') {
      this.setState({
        rValue: value,
      });
    } else if (color === 'g') {
      this.setState({
        gValue: value,
      });
    } else if (color === 'b') {
      this.setState({
        bValue: value,
      });
    }
  }

  render() {
    return (
      <section>
        <SingleColorPicker
          color="r"
          value={this.state.rValue}
          onColorChange={this.handleColorChange}
        />
        <SingleColorPicker
          color="g"
          value={this.state.gValue}
          onColorChange={this.handleColorChange}
        />
        <SingleColorPicker
          color="b"
          value={this.state.bValue}
          onColorChange={this.handleColorChange}
        />
        <div className="rgb-container">
          <div
            className="rgb-complete"
            style={{
              backgroundColor: `rgb(${this.state.rValue},${this.state.gValue},${this.state.bValue})`,
            }}
          ></div>
          <p>{`rgb(${this.state.rValue},${this.state.gValue},${this.state.bValue})`}</p>
        </div>
      </section>
    );
  }
}

export default RGBColorPicker;
