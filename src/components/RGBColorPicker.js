import React from 'react';
import SingleColorPicker from './SingleColorPicker';

class RGBColorPicker extends React.Component {
  state = {
    rValue: 0,
    gValue: 0,
    bValue: 0,
  };

  handleChange = (event) => {
      const {name, value} = event.target;
      this.setState(() => ({
          [name]: value
      }))
  }

  render() {
    return (
      <div>
        <SingleColorPicker color="r" value={this.state.rValue} onChange={this.handleChange} />
        <SingleColorPicker color="g" value={this.state.gValue} onChange={this.handleChange} />
        <SingleColorPicker color="b" value={this.state.bValue} onChange={this.handleChange} />
        <div className="SingleColorPicker">
          <div
            className="colorBox"
            style={{ backgroundColor: `rgb(${this.state.rValue},${this.state.gValue},${this.state.bValue})` }}
          ></div>
          <span className="ml-2">rbg({this.state.rValue},{this.state.gValue},{this.state.bValue})</span>
        </div>
      </div>
    );
  }
}

export default RGBColorPicker;
