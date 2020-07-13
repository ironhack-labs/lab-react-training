import React, { Component } from 'react';
import './RGBColorPicker.css';

export default class RGBColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = { colorR: 255, colorG: 255, colorB: 255 };
  }
  onPickerChange = (event) => {
    const { value, id } = event.target;
    console.log(event);
    switch (id) {
      case 'inputR':
        this.setState({ colorR: parseInt(value) });
        break;
      case 'inputG':
        this.setState({ colorG: parseInt(value) });
        break;
      case 'inputB':
        this.setState({ colorB: parseInt(value) });
        break;
      default:
        break;
    }
    event.preventDefault();
  };
  render() {
    return (
      <div className="colorPickerContainer">
        <div className="colorPicker">
          <div
            className="colorBox"
            style={{ backgroundColor: 'rgb(' + this.state.colorR + ', 0, 0)' }}
          ></div>
          <div>
            R:&nbsp;
            <input
              className="colorNumber"
              id="inputR"
              type="number"
              min={0}
              max={255}
              value={this.state.colorR}
              onChange={this.onPickerChange}
            />
          </div>
        </div>
        <div className="colorPicker">
          <div
            className="colorBox"
            style={{ backgroundColor: 'rgb(0, ' + this.state.colorG + ', 0)' }}
          ></div>
          <div>
            G:&nbsp;
            <input
              className="colorNumber"
              id="inputG"
              type="number"
              min={0}
              max={255}
              value={this.state.colorG}
              onChange={this.onPickerChange}
            />
          </div>
        </div>
        <div className="colorPicker">
          <div
            className="colorBox"
            style={{ backgroundColor: 'rgb(0, 0, ' + this.state.colorB + ')' }}
          ></div>
          <div>
            B:&nbsp;
            <input
              className="colorNumber"
              id="inputB"
              type="number"
              min={0}
              max={255}
              value={this.state.colorB}
              onChange={this.onPickerChange}
            />
          </div>
        </div>
        <div className="colorPicker">
          <div
            className="colorBox"
            style={{
              backgroundColor:
                'rgb(' +
                this.state.colorR +
                ', ' +
                this.state.colorG +
                ', ' +
                this.state.colorB +
                ')',
            }}
          ></div>
          <span>
            rgb({this.state.colorR}, {this.state.colorG}, {this.state.colorB})
          </span>
        </div>
      </div>
    );
  }
}
