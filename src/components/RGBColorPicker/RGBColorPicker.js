import React, {Component} from 'react';
import RgbSingleColorPicker from "../RGBSingleColorPicker/RGBSingleColorPicker";
import './index.css'

class RgbColorPicker extends Component {

  state = {
    'r': 60,
    'g': 120,
    'b': 150
  };

  _changeColor = (object) => {
    this.setState(object);
  };

  render() {
    const {r, g, b} = this.state;
    return (
      <div>
        <RgbSingleColorPicker color={'r'} value={this.state.r} change={this._changeColor}/>
        <RgbSingleColorPicker color={'g'} value={this.state.r} change={this._changeColor}/>
        <RgbSingleColorPicker color={'b'} value={this.state.r} change={this._changeColor}/>
        <div className={'result-picker'}>
          <div className={'demo-color'} style={{'background': `rgb(${r},${g},${b})`}} />
          <p>rgb({r}, {g}, {b})</p>
        </div>
      </div>
    );
  }
}

export default RgbColorPicker;