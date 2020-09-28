import React, { Component } from 'react';
import './RGBColorPicker.css';
import SingleColorPicker from './SingleColorPicker';

class RGBColorPicker extends Component {
  /** */
  state = {
    rValue: 0,
    gValue: 0,
    bValue: 0,
  };

  /** */
  createRGBInput() {
    let cnt = 0;
    const rgbSelect = [];

    while (cnt <= 255) {
      rgbSelect.push(<option value={cnt}> {cnt} </option>);
      cnt++;
    }
    return rgbSelect;
  }

  /** */
  handleChgColor = (evt) => {
    console.log(evt.target.value + '-> ' + evt.target.name);
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  /** */
  render() {
    console.log(' render() -> ', this.state);
    return (
      <div className="rgb-picker">
        <div className="rgb-picker-row">
          <input
            type="button"
            disabled
            className="rgb-box"
            style={{ backgroundColor: `rgb(${this.state.rValue},0,0)` }}
          />

          <SingleColorPicker
            color="rValue"
            value={this.state.rValue}
            handleChgColor={this.handleChgColor}
          />
        </div>

        <div className="rgb-picker-row">
          <input
            type="button"
            disabled
            className="rgb-box"
            style={{
              backgroundColor: `rgb(0,${this.state.gValue},0)`,
            }}
          />
          <SingleColorPicker
            color="gValue"
            value={this.state.gValue}
            handleChgColor={this.handleChgColor}
          />
        </div>

        <div className="rgb-picker-row">
          <input
            type="button"
            disabled
            className="rgb-box"
            style={{
              backgroundColor: `rgb(0,0,${this.state.bValue})`,
            }}
          />
          <SingleColorPicker
            color="bValue"
            value={this.state.bValue}
            handleChgColor={this.handleChgColor}
          />
        </div>

        <div className="rgb-picker-row">
          <input
            type="button"
            disabled
            className="rgb-box"
            style={{
              backgroundColor: `rgb(${this.state.rValue},${this.state.gValue},${this.state.bValue})`,
            }}
          />
          <strong>
            rgb({this.state.rValue},{this.state.gValue},{this.state.bValue})
          </strong>
        </div>
      </div>
    );
  }
}

export default RGBColorPicker;

/**
          <span> R: </span>
          <select
            value={this.state.rValue}
            name="rValue"
            onChange={this.handleChgColor}
          >
            {this.createRGBInput(0)}
          </select>

 */
