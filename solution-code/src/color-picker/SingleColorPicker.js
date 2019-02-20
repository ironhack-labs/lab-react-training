import React, { Component } from 'react'

export default class SingleColorPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 255
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    let r = 0
    let g = 0
    let b = 0
    if (this.props.color === 'r') 
      r = this.state.value
    if (this.props.color === 'g') 
      g = this.state.value
    if (this.props.color === 'b') 
      b = this.state.value
    let backgroundColor = `rgb(${r},${g},${b})`
    return (
      <div className="SingleColorPicker">
        <div className="color-box" style={{backgroundColor:backgroundColor}}></div>
        {this.props.color.toUpperCase()}:
        <input type="number" value={this.state.value} onChange={this.handleChange} />
      </div>
    )
  }
}
