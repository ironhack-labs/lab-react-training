import React, { Component } from 'react';
import './RGBColorPicker.css';

export default class SingleColorPicker extends Component {
  state = {
    color: this.props.color,
    value: this.props.value,
  };

  handleInputChange = async (e) => {
     if (e.target.value > 255) {
      await this.setState({
        [e.target.name]: 255,
      });
    } else if (e.target.value < 0) {
      await this.setState({
        [e.target.name]: 0,
      });
    } else {
      await this.setState({
        [e.target.name]: e.target.value,
      });
    }

    this.props.onChange({
      value: this.state.value,
      color: this.state.color,
    });
  };

  bgColor =
    this.state.color === 'r'
      ? 'red'
      : this.state.color === 'g'
      ? 'green'
      : this.state.color === 'b'
      ? 'blue'
      : null;

  render() {
    return (
      <div className="single-picker-card">
        <div
          className="single-color-picker-box"
          style={{ backgroundColor: `${this.bgColor}` }}
        ></div>
        <p>{this.state.color.toUpperCase()}:</p>
        <input
          type="number"
          name="value"
          onChange={this.handleInputChange}
          value={this.state.value}
        />
      </div>
    );
  }
}
