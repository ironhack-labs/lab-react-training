import React, { Component } from 'react';
import './ColorPicker.css';

export default class ColorPicker extends Component {
  state = {
    red: 255,
    green: 255,
    blue: 255,
  };

  renderSingleColorPickers = () => {
    return (
      <div className="color-picker">
        <label htmlFor="red">Red: </label>
        <div
          className="color-box red"
          style={{ backgroundColor: `rgb(${this.state.red}, 0, 0)` }}
        ></div>
        <input
          type="range"
          name="red"
          id="red"
          onChange={(e) => this.setState({ red: e.target.value })}
          max={255}
          min={0}
          value={this.state.red}
        />
        <label htmlFor="green">Green: </label>
        <div
          className="color-box green"
          style={{ backgroundColor: `rgb(0, ${this.state.green}, 0)` }}
        ></div>
        <input
          type="range"
          name="green"
          id="green"
          onChange={(e) => this.setState({ green: e.target.value })}
          max={255}
          min={0}
          value={this.state.green}
        />
        <label htmlFor="blue">Blue: </label>
        <div
          className="color-box blue"
          style={{ backgroundColor: `rgb(0, 0, ${this.state.blue})` }}
        ></div>
        <input
          type="range"
          name="blue"
          id="blue"
          onChange={(e) => this.setState({ blue: e.target.value })}
          max={255}
          min={0}
          value={this.state.blue}
        />
      </div>
    );
  };

  render() {
    return (
      <div className="color-picker">
        {this.renderSingleColorPickers()}
        <p>
          {`rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`}
        </p>
        <div
          className="color-box"
          style={{
            backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`,
          }}
        ></div>
      </div>
    );
  }
}
