import React, {Component} from 'react';
import './index.css';

class RgbSingleColorPicker extends Component {

  colors = {
    'r' : 'red',
    'g' : 'green',
    'b' : 'black'
  };

  render() {
    const {value, change, color} = this.props;

    return (
      <div className={'single-picker'}>
        <div className={'demo-color'} style={{'background': this.colors[color]}} />
        <input onChange={(e) => change({ [color]: parseInt(e.currentTarget.value)})} onKeyUp={(e) => change({ [color]: parseInt(e.currentTarget.value)})} type={'number'} min={0} max={255} defaultValue={value} />
      </div>
    );
  }
}

export default RgbSingleColorPicker;