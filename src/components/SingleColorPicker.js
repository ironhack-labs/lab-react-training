import React, { Component } from 'react'

export default class SingleColorPicker extends Component {

  getColor = () => {
    const { color } = this.props
    let cssColor
    if(color === 'r') cssColor = 'red'
    else if(color === 'g') cssColor = 'green'
    else if(color === 'b') cssColor = 'black'
    return cssColor
  }

  handleInput = (e) => {
    this.props.handleChange(e.target.value, this.props.color)
  }

  render() {
    const { color, value } = this.props
    return (
      <div style={{display:'flex', alignItems: 'center'}}>
        <div style={{backgroundColor: this.getColor(), width: '40px', height: '40px', margin: '5px', border: '1px solid black'}}></div>
        {color}:<input type="number" value={value} onChange={this.handleInput} max={255} min={0}/>
      </div>
    )
  }
}
