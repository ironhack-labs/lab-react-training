import React, { Component } from 'react';

export default class ClickablePicture extends Component {
  state = {
    isHidden: false,
  };

  handleClick = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  render() {
    return (
      <div>
        <img
          src={this.state.isHidden ? this.props.imgClicked : this.props.img}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
