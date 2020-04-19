import React,  { Component } from 'react';
import './ColorPicker.css';

class SingleColorPicker extends Component {


  chooseRGBColor = () => {
    
    const { color, value} = this.props;
    switch (color) {
      case 'R':
        return `rgb(${value},0,0)`
      case 'G': 
        return `rgb(0,${value},0)`
      case 'B':
        return `rgb(0,0,${value})`
      default:
          return 'rgb(0,0,0)'
    }
  }

  handleInput = (e) => {
    const {onChange, color} = this.props; 
    onChange(e, color)
  }

  render(){
    const {color,value} = this.props; 
    return (
      <div className="SingleColorPicker">
        <div
          className="MiniBox"
          style={{ backgroundColor: this.chooseRGBColor() }}
        ></div>
        <span> {color}: </span>
        <input
          type="number"
          min="0"
          max="255"
          value={value}
          onChange={this.handleInput}
        />
      </div>
    );
  }
}

export default SingleColorPicker;