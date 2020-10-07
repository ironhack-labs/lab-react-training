import React, { Component } from 'react';
import SingleColorPicker from './SingleColorPicker';

class RGBColorPicker extends Component {
  state = {
    rValue: '',
    gValue: '',
    bValue: '',
  };

handleColors = (color) => {

    this.setState({
        
    })
}

  render() {
    return (
      <div>
        <h1>Color Picker</h1>
        <SingleColorPicker handleColorSelection={this.handleColors} color="R" />
        <SingleColorPicker color="G" />
        <SingleColorPicker color="B" />
        <div>
          <p>
            rgb({this.state.rValue}, {this.state.gValue}, {this.state.bValue})
          </p>
        </div>
      </div>
    );
  }
}

export default RGBColorPicker;
