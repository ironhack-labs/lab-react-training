import React, { Component } from 'react';

class ClickablePicture extends Component {
  state = {
    isClicked: false
  }

  onClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render () {
    return (
      <img
        onClick={this.onClick}
        src={this.state.isClicked ? this.props.imgClicked : this.props.img}
        alt={this.state.isClicked}
      />
    );
  }
};

export default ClickablePicture;
