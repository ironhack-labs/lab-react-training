import React, { Component } from 'react'
import SingleColorPicker from './SingleColorPicker'

export default class RGBColorPicker extends Component {

  constructor(){
    super()
    this.state = {
      rvalue: '0',
      gvalue: '0',
      bvalue: '0'
    }
  }

  handleChange = (value, type) => {
    const stateToChange = `${type}value`
    this.setState({ [stateToChange]: value })
  }

  calcColor = () => {
    const { rvalue, gvalue, bvalue } = this.state
    return `rgb(${rvalue}, ${gvalue}, ${bvalue})`
  }

  render() {
    const rgba = this.calcColor()
    return (
      <div>
        <SingleColorPicker handleChange={this.handleChange} color="r"/>
        <SingleColorPicker handleChange={this.handleChange} color="g"/>
        <SingleColorPicker handleChange={this.handleChange} color="b"/>
        <div style={{display:'flex', alignItems: 'center'}}>
          <div style={{backgroundColor: rgba, width: '40px', height: '40px', margin: '5px', border: '1px solid black'}}></div>
          <p style={{margin: 0}}>{rgba}</p>
        </div>
      </div>
    )
  }
}
