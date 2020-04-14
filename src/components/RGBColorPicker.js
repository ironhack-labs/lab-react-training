import React, { Component } from "react";
import SingleColorPicker from './SingleColorPicker';

class RGBColorPicker extends Component {
  
  state = {
    rValue: 0,
    gValue: 0,
    bValue: 0,
  }

  render () {
    return (
      <div className="">
      <SingleColorPicker />
      </div>
    )
  }
}

export default RGBColorPicker;