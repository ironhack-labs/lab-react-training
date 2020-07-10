import React, { Component } from 'react';

export default class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = { img: this.props.img };
  }
  click = () => {
    this.setState({
      img:
        this.state.img === this.props.img
          ? this.props.imgClicked
          : this.props.img,
    });
  };
  render() {
    return (
      <img
        src={this.state.img}
        style={{ width: 200 }}
        onClick={this.click}
        alt=""
      />
    );
  }
}
