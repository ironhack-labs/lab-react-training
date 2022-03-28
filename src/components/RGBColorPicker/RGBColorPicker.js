import React, { Component } from 'react';
import SingleColorPicker from '../SingleColorPicker/SingleColorPicker';

class RGBColorPicker extends Component {
  state = {
    rValue: '',
    gValue: '',
    bValue: ''
  }

  onChange = (event) => {
    const { value, name} = event.target;
    console.log(value, name)

    switch (name) {
      case "r":
        this.setState({
          rValue : value
        })
      break;
      case "g":
        this.setState({
          gValue: value
        })
      break;
      default:
        this.setState({
          bValue: value
        })
    }
  }


  render() {
    const { rValue, gValue, bValue } = this.state

    return (
      <div>
        <div>
          <SingleColorPicker color="r" value={rValue} onChange={this.onChange}/>
          <SingleColorPicker color="g" value={gValue} onChange={this.onChange}/>
          <SingleColorPicker color="b" value={bValue} onChange={this.onChange}/>
        </div>
        <div>
          <p>rgb: ({`${rValue}, ${gValue}, ${bValue}`})</p>
          <div style={{width: 50, height: 50, backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`}}></div>
        </div>
      </div>
    )
  }
}
export default RGBColorPicker