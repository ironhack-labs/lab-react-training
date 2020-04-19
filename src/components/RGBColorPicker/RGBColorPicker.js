import React, { Component } from 'react';
import SingleColorPicker from './SingleColorPicker';

class RGBColorPicker extends Component {
  state = {
    rValue: 0,
    gValue: 0,
    bValue: 0,
  }
  onChange = (e, color) => {
    switch (color) {
      case 'R':
        this.setState({ rValue: e.currentTarget.value });
        break;
      case 'B':
        this.setState({ bValue: e.currentTarget.value });
        break;
      case 'G':
        this.setState({gValue: e.currentTarget.value})
        break;
      default:
        break;
    }
  }
  render(){
    const { rValue, gValue, bValue } = this.state; 
    return (
      <div>
        <SingleColorPicker color="R" value={rValue} onChange={this.onChange} />
        <SingleColorPicker color="G" value={gValue} onChange={this.onChange} />
        <SingleColorPicker color="B" value={bValue} onChange={this.onChange} />
        <div className="SingleColorPicker">
        <div
          className="MiniBox"
          style={{ backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue}` }}
        ></div>
        <span>
          rgb({rValue}, {gValue}, {gValue})
        </span>
        </div>
      </div>
    );
  }
}

export default RGBColorPicker; 