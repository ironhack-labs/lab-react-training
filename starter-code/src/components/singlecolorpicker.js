import React, { Component } from 'react'

export class SingleColorPicker extends Component {
  render() {
    return (
      <div className="colorpickerbox">
        <div className="colorbox"></div>
        <div className="colorboxcontent">
          <h2>{this.props.color.toUpperCase()}</h2>
          <input type="number" name={this.props.color} value={this.props.value} onChange={this.handleChangeQuantity} />
        </div>
      </div>
    )
  }
}

export default SingleColorPicker
