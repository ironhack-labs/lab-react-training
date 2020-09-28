import React, { Component } from 'react';
import SingleColorPicker from './SingleColorPicker';
import './RGBColorPicker.css';

export default class RGBColorPicker extends Component {
  state = {
    rValue: 0,
    gValue: 0,
    bValue: 0,
  };

  setValue = (e) => {
    const color = e.color;
    const value = e.value;
    this.setState({
      [`${color}Value`]: value,
    });
  };

  render() {
    return (
      <div className="color-picker">
        <SingleColorPicker color="r" value={0} onChange={this.setValue} />
        <SingleColorPicker color="g" value={0} onChange={this.setValue} />
        <SingleColorPicker color="b" value={0} onChange={this.setValue} />
        <div className="rgb-box">
          <div
            className="single-color-picker-box"
            style={{
              backgroundColor: `rgb(${this.state.rValue},${this.state.gValue},${this.state.bValue})`,
            }}
          ></div>
          <p className="rgb-text">
            rgb{this.state.rValue},{this.state.gValue},{this.state.bValue}
          </p>
        </div>
      </div>
    );
  }
}
