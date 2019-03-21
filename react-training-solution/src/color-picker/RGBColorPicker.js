import React, { Component } from 'react'
import SingleColorPicker from './SingleColorPicker'

export default class RGBColorPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rValue: 255,
      bValue: 255,
      gValue: 255,
    }
    this.handleColorChange = this.handleColorChange.bind(this)
  }
  handleColorChange(value,color){
    if (color === 'r') {
      this.setState({
        rValue: value
      })
    }
    if (color === 'g') {
      this.setState({
        gValue: value
      })
    }
    if (color === 'b') {
      this.setState({
        bValue: value
      })
    }
  }
  render() {
    return (
      <div className="RGBColorPicker">
        <SingleColorPicker
          color="r"
          value={this.state.rValue}
          onColorChange={this.handleColorChange} /> {/* Method 1 */}
        <SingleColorPicker
          color="g"
          value={this.state.gValue}
          onColorChange={value=>this.handleColorChange(value,'g')}  /> {/* Method 2 */}
        <SingleColorPicker
          color="b"
          value={this.state.bValue}
          onColorChange={value=>this.handleColorChange(value,'b')} /> {/* Method 2 */}
        <div className="flex-align-items-center">
          <div 
            className="color-box" 
            style={{backgroundColor: `rgb(${this.state.rValue},${this.state.gValue},${this.state.bValue})`}} />
          rgb({this.state.rValue},{this.state.gValue},{this.state.bValue})
        </div>
      </div>
    )
  }
}

/*
##### BEFORE LIFTING STATE UP #####

<RGBColorPicker>         ---> PARENT
0 props
0 state

  <SingleColorPicker>    ---> CHILD
  1 props: color='r'
  1 state: value (number between 0 and 255)

  <SingleColorPicker>    ---> CHILD
  1 props: color='g'
  1 state: value (number between 0 and 255)

  <SingleColorPicker>    ---> CHILD
  1 props: color='b'
  1 state: value (number between 0 and 255)


##### AFTER LIFTING STATE UP #####

<RGBColorPicker>         ---> PARENT
0 props
3 state: rValue, gValue, bValue (numbers between 0 and 255)

  <SingleColorPicker>    ---> CHILD
  0 state
  3 props: color='r'
           value (number between 0 and 255)
           onColorChange (function)

  <SingleColorPicker>    ---> CHILD
  0 state
  3 props: color='g'
           value (number between 0 and 255)
           onColorChange (function)

  <SingleColorPicker>    ---> CHILD
  0 state
  3 props: color='b'
           value (number between 0 and 255)
           onColorChange (function)

*/