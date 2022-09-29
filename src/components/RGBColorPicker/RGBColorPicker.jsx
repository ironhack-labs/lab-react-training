import { Component } from "react"
import BoxColor from "../BoxColor/BoxColor";
import SingleColorPicker from "../SingleColorPicker/SingleColorPicker";

export default class RGBColorPicker extends Component {
  state = {
    rValue: 0,
    gValue: 0,
    bValue: 0,
  };

  hadleColorChange = (inputState) => {
    this.setState(inputState);
  };

  render() {
    const { rValue, gValue, bValue } = this.state;
    return (
      <div className="RGB-container">
        <SingleColorPicker
          onSubmit={this.hadleColorChange}
        />
        <BoxColor
          r={rValue}
          g={gValue}
          b={bValue}
        ></BoxColor>
      </div>
    );
  }
}  
