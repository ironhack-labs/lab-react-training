import React, { Component } from 'react';
import SingleColorPicker from './SingleColorPicker';
import '../assets/css/RGBColorPicker.css';

class RGBColorPicker extends Component {
  state = {
    rValue: 255,
    gValue: 150,
    bValue: 0,
  };

  handleChange = (e) => {
    let value = e.target.value;
    if (value < 0) {
      value = 0;
    }
    if (value > 255) {
      value = 255;
    }
    this.setState({ [e.target.name]: value });
  };
  render() {
    const { rValue, gValue, bValue } = this.state;
    return (
      <div className="RGBColorPicker">
        <div className="RGBColorPickerDiv">
          <div
            className="caja"
            style={{ backgroundColor: `rgb(${rValue}, 0, 0)` }}
          />
          <label>R</label>
          <input
            type="number"
            onChange={this.handleChange}
            name="rValue"
            value={rValue}
          />
        </div>
        <div className="RGBColorPickerDiv">
          <div
            className="caja"
            style={{ backgroundColor: `rgb(0, ${gValue}, 0)` }}
          />
          <label>G</label>
          <input
            type="number"
            onChange={this.handleChange}
            name="gValue"
            value={gValue}
          />
        </div>
        <div className="RGBColorPickerDiv">
          <div
            className="caja"
            style={{ backgroundColor: `rgb(0, 0,${bValue})` }}
          />
          <label>B</label>
          <input
            type="number"
            onChange={this.handleChange}
            name="bValue"
            value={bValue}
          />
        </div>
        <div>
          <SingleColorPicker rValue={rValue} gValue={gValue} bValue={bValue} />
        </div>
      </div>
    );
  }
}

export default RGBColorPicker;
