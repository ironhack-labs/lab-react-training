import React, { Component } from 'react';

export class ClickablePicture extends Component {
  state = {
    counter: 0,
  };

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <div onClick={this.handleIncrement}>
          {this.state.counter % 2 === 0 && <img src={this.props.img} alt="1" />}
          {this.state.counter % 2 !== 0 && (
            <img src={this.props.imgClicked} alt="2" />
          )}
        </div>
      </div>
    );
  }
}
export default ClickablePicture;
