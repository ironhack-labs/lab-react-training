import React, { Component } from "react";

export default class Clickable extends Component {
  state = {
    clicked: true
  };
  clickImg = () => {
    this.state.clicked
      ? this.setState({ clicked: false })
      : this.setState({ clicked: true });
  };
  render() {
    if (this.state.clicked) {
      return (
        <img onClick={() => this.clickImg()} src={this.props.img} alt="lol" />
      );
    } else {
      return (
        <img
          onClick={() => this.clickImg()}
          src={this.props.imgClicked}
          alt="lol"
        />
      );
    }
  }
}
