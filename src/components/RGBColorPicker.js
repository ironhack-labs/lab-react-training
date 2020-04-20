import React, { Component } from "react";
import SingleColorPicker from './SingleColorPicker';

class RGBColorPicker extends Component {
  
  state = {
    r: 255,
    g: 150,
    b: 0,
  }

  boxOnChange = (e, color) => {
    this.setState({
      [color]: e.target.value,
    })
  }

  render () {
    const { r, g, b } = this.state;
    return (
      <div className="rgb-container">
      <SingleColorPicker color='r' value={r} onChange={this.boxOnChange}/>
      <SingleColorPicker color='g' value={g} onChange={this.boxOnChange}/>
      <SingleColorPicker color='b' value={b} onChange={this.boxOnChange}/>
      <div className="box-result-container">
        <div style={{'backgroundColor': `rgb(${r},${g},${b})`}} className='box-singlecolor'></div> <p>rgb({r},{g},{b})</p>
      </div>
      </div>
    )
  }
}

export default RGBColorPicker;