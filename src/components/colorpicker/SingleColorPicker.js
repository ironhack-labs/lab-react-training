import React, { Component } from 'react';
import style from './RGBColorPicker.module.css';

export default class SingleColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 255
    }
  }

  onInputChangeHandler = (e) => {
    const {name, value} = e.target;
    this.setState({
      value: value
    });
    this.props.onChange({
      [name]: value
    });
  }

  render() {
    return (
      <div className={style.singleColorPicker}>
        <label>{this.props.color.toUpperCase()}</label>
        <input onChange={this.onInputChangeHandler} type="number" name={`${this.props.color}Value`} value={this.state.value} />
      </div>
    )
  }
}



