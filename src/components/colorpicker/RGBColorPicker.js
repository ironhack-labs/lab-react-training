import React, { Component } from 'react';
import SingleColorPicker from './SingleColorPicker';
import style from './RGBColorPicker.module.css';

export default class RGBColorPicker extends Component {
  state = {
    rValue: 255,
    gValue: 255,
    bValue: 255
  }

  handleColorValueChange = (colorValueObj) => {
    this.setState(colorValueObj);
  }

  render() {
    const {rValue, gValue, bValue} = this.state;
    return (
      <div className={style.container}>
        <div>
          <div className={style.colorBlock} style={
            {
              backgroundColor: `rgb(${rValue}, 0, 0)`
            }
          }></div>
          <SingleColorPicker color="r" onChange={this.handleColorValueChange} />
        </div>

        <div>
          <div className={style.colorBlock} style={
            {
              backgroundColor: `rgb(0, ${gValue}, 0)`
            }
          }></div>
          <SingleColorPicker color="g" onChange={this.handleColorValueChange} />
        </div>
        
        <div>
          <div className={style.colorBlock} style={
            {
              backgroundColor: `rgb(0, 0, ${bValue})`
            }
          }></div>
          <SingleColorPicker color="b" onChange={this.handleColorValueChange} />
        </div>

        <div>
          <div className={style.colorBlock} style={
            {
              backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`
            }            
          }></div>
          <span>rgb({`${rValue}, ${gValue}, ${bValue}`})</span>
        </div>
        
      </div>
    )
  }
}
