// components/RGBColorPicker/RGBColorPicker.js

import React, { Component } from 'react';
import SingleColorPicker from './SingleColorPicker';
import ColorResult from './ColorResult';

export default class RGBColorPicker extends Component {
  state = { r: 255, g: 255, b: 255 };

  handleChange = (color, value) => {
    this.setState({
      [color]: value,
    });
  };

  render() {
    const { r, g, b } = this.state;
    return (
      <div className='rgb-color-picker'>
        <SingleColorPicker color='r' value={r} onChange={this.handleChange} />
        <SingleColorPicker color='g' value={g} onChange={this.handleChange} />
        <SingleColorPicker color='b' value={b} onChange={this.handleChange} />
        <ColorResult r={r} g={g} b={b} />
      </div>
    );
  }
}
