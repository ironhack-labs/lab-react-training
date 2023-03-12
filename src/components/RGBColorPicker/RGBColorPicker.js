import React, { Component } from 'react';
import SingleColorPicker from '../SingleColorPicker/SingleColorPicker';
import "./RGBColorPicker.css"

class RGBColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rValue: 255,
      gValue: 150,
      bValue: 0,
    };
  }

  handleRChange = (event) => {
    this.setState({ rValue: event.target.value });
  };

  handleGChange = (event) => {
    this.setState({ gValue: event.target.value });
  };

  handleBChange = (event) => {
    this.setState({ bValue: event.target.value });
  };

  render() {
    const { rValue, gValue, bValue } = this.state;

    return (
      <div>
      <div className='d-flex'>
        <div className="square" style={{backgroundColor: `rgb(${rValue},0, 0)`}}></div>
          <SingleColorPicker 
            color="R"
            value={rValue}
            onChange={this.handleRChange}
          />
      </div>
      <div className='d-flex'>
        <div  className="square" style={{backgroundColor: `rgb(0 ,${gValue}, 0)`}}></div>
          <SingleColorPicker
            color="G"
            value={gValue}
            onChange={this.handleGChange}
          />
          </div>
          <div className='d-flex'>
          <div  className="square" style={{backgroundColor: `rgb(0 ,0, ${bValue})`}}></div>
          <SingleColorPicker
            color="G"
            value={bValue}
            onChange={this.handleBChange}
          />
          </div>



          <div className='d-flex'>
          <div  className="square" style={{backgroundColor: `rgb(${rValue} ,${gValue}, ${bValue})`}}></div>
          <h4 style={{color: 'black'}}>rgb({rValue}, {gValue}, {bValue})</h4>
          </div>


        </div>
    );
  }
}

export default RGBColorPicker;
