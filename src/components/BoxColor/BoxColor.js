import React, { Component } from 'react'

export default class BoxColor extends Component {

    componentRgbToHex = (c) => {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;

    }

    rgbToHex = (r, g, b) => {
        return `#${this.componentRgbToHex(r)}${this.componentRgbToHex(g)}${this.componentRgbToHex(b)} `
    }

  render() {
      const {r, g, b} = this.props
    return (
      <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`}}>

          <h3>rgb({r}, {g}, {b})</h3>
          <h3>{this.rgbToHex(r, g, b)}</h3>
      </div>
    )


  }
}


