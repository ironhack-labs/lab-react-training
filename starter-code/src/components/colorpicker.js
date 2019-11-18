import React, { Component } from 'react';
import SingleColorPicker from '../components/singlecolorpicker';

export class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rValue: 255,
      gValue: 150,
      bValue: 0
    }
}
  render() {
    return (
      <div>
        <SingleColorPicker color="r" value={220} />
        <SingleColorPicker color="g" value={100} />
        <SingleColorPicker color="b" value={170} />
      </div>
    )
  }
}

export default ColorPicker
