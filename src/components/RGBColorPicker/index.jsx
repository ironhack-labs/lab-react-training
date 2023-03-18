import React, { Component } from 'react';
import SingleColorPicker from '../SingleColorPicker';
import './index.css'

class RGBColorPicker extends Component {
  state = {
    rValue: 255,
    gValue: 255,
    bValue: 255
  }

  getColor = (letter) => {
    switch (letter) {
      case 'r':
        return 'red'
      case 'g':
        return 'green'
      case 'b':
        return 'blue'
      default:
        break;
    }
  }

  onChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  render() {
    const { rValue, gValue, bValue } = this.state
    return (
      <div className='RGBColorPicker'>
        <SingleColorPicker value={rValue} color='r' onChange={this.onChange} getColor={this.getColor} name='rValue'/>
        <SingleColorPicker value={gValue} color='g' onChange={this.onChange} getColor={this.getColor} name='gValue'/>
        <SingleColorPicker value={bValue} color='b' onChange={this.onChange} getColor={this.getColor} name='bValue'/>
        <div>
          <div style={{backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`, width: '30px', height: '30px'}}></div>
          <p>rbg({rValue}, {gValue}, {bValue})</p>
        </div>
      </div>
    );
  }
}

export default RGBColorPicker;