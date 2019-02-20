import React, { Component } from 'react'
import SingleColorPicker from './SingleColorPicker'

export default class RGBColorPicker extends Component {
  render() {
    return (
      <div className="RGBColorPicker">
        <SingleColorPicker color="r" />
        <SingleColorPicker color="g" />
        <SingleColorPicker color="b" />
        <div className="color-box"></div>
      </div>
    )
  }
}
