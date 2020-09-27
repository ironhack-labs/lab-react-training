import React, { Component } from 'react';
import './RGBColorPicker.css';
class RGBColorPicker extends Component {
  state = {
    rValue: 0,
    gValue: 0,
    bValue: 0,
  };

  createRGBInput(value) {
    let cnt = 0;
    const rgbSelect = [];

    while (cnt <= 255) {
      rgbSelect.push(<option value={cnt}> {cnt} </option>);
      cnt++;
    }
    return rgbSelect;
  }

  render() {
    return (
      <div className="rgb-picker">
        <div className="rgb-picker-row">
          <input type="button" disbled className="rgb-box" /> <span> R: </span>
          <select value={this.state.rValue}> {this.createRGBInput(0)} </select>
        </div>

        <div className="rgb-picker-row">
          <input type="button" disbled className="rgb-box" /> <span> G: </span>
          <select value={this.state.gValue}> {this.createRGBInput(0)} </select>
        </div>
        <div className="rgb-picker-row">
          <input type="button" disbled className="rgb-box" /> <span> B: </span>
          <select value={this.state.bValue}> {this.createRGBInput(0)} </select>
        </div>
      </div>
    );
  }
}

export default RGBColorPicker;
