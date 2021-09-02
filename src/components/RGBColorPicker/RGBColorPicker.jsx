import React from 'react';
import SingleColorPicker from '../singleColorPicker/SingleColorPicker';
import './RGBColorPicker.css';

const initialState = {
  rValue: '',
  gValue: '',
  bValue: '',
};

export default class RGBColorPicker extends React.Component {
  state = { ...initialState };

  onValueChange = (color, value) => {
    if (value < 0) {
      return;
    }

    if (color === 'r' && value <= 255) {
      this.setState({ rValue: value });
    } else if (color === 'g' && value <= 255) {
      this.setState({ gValue: value });
    } else if (color === 'b' && value <= 255) {
      this.setState({ bValue: value });
    }
  };

  getFinalBackgroundColor = (r, g, b) => {
    return `rgb(${r},${g},${b})`;
  };

  render() {
    return (
      <div className="RGBColorPicker container">
        <SingleColorPicker
          style={{ backgroundColor: this.state.rValue }}
          color="r"
          value={this.state.rValue}
          onChange={this.onValueChange}
        />
        <SingleColorPicker
          style={{ backgroundColor: this.state.gValue }}
          color="g"
          value={this.state.gValue}
          onChange={this.onValueChange}
        />
        <SingleColorPicker
          style={{ backgroundColor: this.state.bValue }}
          color="b"
          value={this.state.bValue}
          onChange={this.onValueChange}
        />
        <div className="RGBColorPicker-result">
          <div
            className="square"
            style={{
              backgroundColor: this.getFinalBackgroundColor(
                this.state.rValue,
                this.state.gValue,
                this.state.bValue
              ),
            }}
          ></div>
          <h2>
            {(this.state.rValue && this.state.gValue && this.state.bValue) >
              0 &&
              `rgb(${this.state.rValue},${this.state.gValue},${this.state.bValue}))`}
          </h2>
        </div>
      </div>
    );
  }
}
