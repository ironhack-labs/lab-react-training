import React from 'react';
import SingleColorPicker from '../singlecolorpicker/SingleColorPicker';

export default class RGBColorPicker extends React.Component {
  
  state = {
    rValue: 0,
    gValue: 0,
    bValue: 0
  }

  handleChange = (event) => {
    this.setState({
      [`${event.target.name}Value`]: event.target.value
    })
  }
  
  render() {
    return (
      <div>
        <SingleColorPicker color={'r'} value={this.state.rValue} handleChange={this.handleChange} />
        <SingleColorPicker color={'g'} value={this.state.gValue} handleChange={this.handleChange} />
        <SingleColorPicker color={'b'} value={this.state.bValue} handleChange={this.handleChange} />
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{height: '16px', width: '16px', backgroundColor: `rgb(${this.state.rValue}, ${this.state.gValue}, ${this.state.bValue})`}}></div>
            {`rgb(${this.state.rValue}, ${this.state.gValue}, ${this.state.bValue})`}
        </div>
      </div>
    )
  }
}