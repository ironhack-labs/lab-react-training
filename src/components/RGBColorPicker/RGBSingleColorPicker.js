import React, { Component } from 'react';

export default class RGBSingleColorPicker extends Component {
  state = { value: this.props.value, boxColor: 'this.props.value' };

  handleChange = (event) => {
    let { value, min, max } = event.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    this.setState({ value, boxColor: this.props.color });
  };

  render() {
    return (
      <div>
        <h1>RGB Single Color Picker</h1>
        <div
          className="boxColor"
          style={{
            backgroundColor: `${this.state.boxColor}`,
          }}
        >
          []
        </div>
        <div>{this.props.color}</div>
        <input
          type="number"
          min="0"
          max="255"
          onChange={this.handleChange}
          value={this.state.value}
        ></input>
      </div>
    );
  }
}
