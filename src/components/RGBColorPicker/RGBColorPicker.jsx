import { Component } from 'react';
import './index.css';
import ColorSquare from './ColorSquare';
import SingleColorPicker from './SingleColorPicker';

class RGBColorPicker extends Component {
  state = {
    rValue: 255,
    gValue: 255,
    bValue: 255,
  };

  onChange = (ev) => {
    const { name, value } = ev.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { rValue, gValue, bValue } = this.state;

    return (
      <div className="RGBColorPicker">
        <SingleColorPicker
          onChange={this.onChange}
          color="r"
          value={rValue}
          name="rValue"
          squareColor={`rgb(${rValue},0,0)`}
        />

        <SingleColorPicker
          onChange={this.onChange}
          color="g"
          value={gValue}
          name="gValue"
          squareColor={`rgb(0,${gValue},0)`}
        />

        <SingleColorPicker
          onChange={this.onChange}
          color="b"
          value={bValue}
          name="bValue"
          squareColor={`rgb(0,0,${bValue})`}
        />

        <div className="rgb">
          <ColorSquare squareColor={`rgb(${rValue},${gValue},${bValue})`} />
          rgb({rValue},{gValue},{bValue})
        </div>
      </div>
    );
  }
}

export default RGBColorPicker;
