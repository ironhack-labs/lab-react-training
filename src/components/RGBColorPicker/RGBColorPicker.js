import React, { Component } from 'react';
import SingleColorPicker from '../SingleColorPicker/SingleColorPicker';
import './RGBColorPicker.css';

export default class RGBColorPicker extends Component {
  state = {
    rValue: 0,
    gValue: 0,
    bValue: 0
  }

  switchValueR = (e) => {
    this.setState({ rValue: e.target.value });
  }

  switchValueG = (e) => {
    this.setState({ gValue: e.target.value });
  }

  switchValueB = (e) => {
    this.setState({ bValue: e.target.value });
  }

  render() {
    const { rValue, gValue, bValue } = this.state;

    const divStyle = {
      backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`
    }

    return (
      <div>
        <SingleColorPicker 
          color='R'
          value={this.state.rValue}
          onChange={this.switchValueR}
        />

        <SingleColorPicker 
          color='G'
          value={this.state.gValue}
          onChange={this.switchValueG}
        />

        <SingleColorPicker 
          color='B'
          value={this.state.bValue}
          onChange={this.switchValueB}
        />

        <div className='color-single'>
          <div style={divStyle} className='color-sample'></div>
          <div className='color-text'>
            rgb({rValue}, {gValue}, {bValue})
          </div>
        </div>
      </div>
    )
  }
}
