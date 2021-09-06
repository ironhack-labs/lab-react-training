import React from 'react';

export default class SingleColorPicker extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.color}>{this.props.color.toUpperCase()}:</label>
        <input
          type='number'
          min='0'
          max='255'
          name={this.props.color}
          id={this.props.color}
          value={this.props.value}
          onChange={this.props.handleChange}
        />
      </div>
    )
  }
}