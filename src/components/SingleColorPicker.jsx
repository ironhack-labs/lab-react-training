import React, { Component } from 'react';

class SingleColorPicker extends Component {
  state = {
    color: 0,
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({
      color: value,
    });
  };

  render() {
    console.log(this.props.color, this.state);
    return (
      <div>
        <form>
          <label>{this.props.color}</label>
          <input
            onChange={this.handleChange}
            type="number"
            name={this.props.color}
            // value={this.state.color}
          />
        </form>
      </div>
    );
  }
}

export default SingleColorPicker;
