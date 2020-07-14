import React, { Component } from 'react';
import SingleColorPicker from './SingleColorPicker';

class RGBColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rValue: 20,
      gValue: 40,
      bValue: 60,
    };
    this.handleRedChange = this.handleRedChange.bind(this);
    this.handleGreenChange = this.handleGreenChange.bind(this);
    this.handleBlueChange = this.handleBlueChange.bind(this);
  }

  handleRedChange(event) {
    console.log(event.target.value);
    this.setState({ rValue: event.target.value });
  }

  handleGreenChange(event) {
    console.log(event.target.value);
    this.setState({ gValue: event.target.value });
  }

  handleBlueChange(event) {
    console.log(event.target.value);
    this.setState({ bValue: event.target.value });
  }

  render() {
    return (
      <div>
        <SingleColorPicker
          color="Red"
          value={this.state.rValue}
          style={{backgroundColor:`rgb(${this.state.rValue},0,0`}}
          changeColor={this.handleRedChange}
        />
        <SingleColorPicker
          color="Green"
          value={this.state.gValue}
          style={{backgroundColor:`rgb(0,${this.state.gValue},0)`}}
          changeColor={this.handleGreenChange}
        />
        <SingleColorPicker
          color="Blue"
          value={this.state.bValue}
          style={{backgroundColor:`rgb(0,0,${this.state.bValue})`}}
          changeColor={this.handleBlueChange}
        />
        <div className="color-container">
            <div className="color-box" style={{backgroundColor:`rgb(${this.state.rValue},${this.state.gValue},${this.state.bValue})`}}></div>
            <span>rgb({this.state.rValue},{this.state.gValue},{this.state.bValue})</span>
        </div>
      </div>
    );
  }
}

export default RGBColorPicker;
