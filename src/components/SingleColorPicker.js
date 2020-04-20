import React, { Component } from "react";

class SingleColorPicker extends Component {
  
  boxColor = () => {
    const {color} = this.props;
    if (color === 'r') {
      return 'box-singlecolor box-red';
    } else if (color === 'g') {
      return 'box-singlecolor box-green'
    } else {
      return 'box-singlecolor box-black';
    }
  }

  valueChange = (e, color) => {
    return this.props.onChange(e, color);
  }

  render () {
    const { color, value } = this.props;
    return (
      <div className="singlecolor-container">
       <div className={this.boxColor()}></div>
       <p>{color}:</p><input className="input-singlecolor" value={value} type="number" onChange={(e) => this.valueChange(e, color)}/>
      </div>
    )
  }
}

export default SingleColorPicker;