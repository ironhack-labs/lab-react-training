import { Component } from "react";
import BoxColor from "../BoxColor/BoxColor";
import './SingleColorPicker.css';

export default class SingleColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rValue: 0,
      gValue: 0,
      bValue: 0,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      rValue: 0,
      gValue: 0,
      bValue: 0,
    });
  };

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };


  render() {
    const { rValue, gValue, bValue } = this.state;

    return (
      <form className="Form-container" onSubmit={this.handleSubmit}>
        <div className="Color-container">
          <BoxColor r={rValue} g={0} b={0}></BoxColor>
          <label htmlFor="rValue">R:</label>
          <input
            name="rValue"
            id="rValue"
            value={rValue}
            type="number"
            min={0}
            max={255}
            onChange={this.handleOnChange}
          />
        </div>

        <div className="Color-container">
          <BoxColor r={0} g={gValue} b={0}></BoxColor>
          <label htmlFor="gValue">G:</label>
          <input
            name="gValue"
            id="gValue"
            value={gValue}
            type="number"
            min={0}
            max={255}
            onChange={this.handleOnChange}
          />
        </div>

        <div className="Color-container">
          <BoxColor r={0} g={0} b={bValue}></BoxColor>
          <label htmlFor="bValue">B:</label>
          <input
            name="bValue"
            id="bValue"
            value={bValue}
            type="number"
            min={0}
            max={255}
            onChange={this.handleOnChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}