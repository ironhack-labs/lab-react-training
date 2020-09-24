import React from 'react'
import './RGBColorPicker.css'
import InputNumber from "./Form/InputNumber";

export default class RGBColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      R: 0,
      G: 0,
      B: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <InputNumber
          name="R"
          value={this.state.R}
          onChange={this.handleChange} />
        <InputNumber
          name="G"
          value={this.state.G}
          onChange={this.handleChange} />
        <InputNumber
          name="B"
          value={this.state.B}
          onChange={this.handleChange} />
        <div>

          <span className="FinalBox" style={{backgroundColor: `rgb(${this.state.R}, ${this.state.G}, ${this.state.B})`}}></span>
          <span className="ResultColor">rgb ({`${this.state.R}, ${this.state.G}, ${this.state.B}`})</span>
        
        </div>
      </div>
    )
  }
}