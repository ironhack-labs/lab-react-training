import React, { Component } from 'react';

export default class ClickablePicture extends Component {
  state = {
    clicked: false,
  };

  clickHandler = () => {
    this.setState((state) => {
      return { clicked: !state.clicked };
    });
  };

  render() {
    return (
      <div className="clickableImage" onClick={this.clickHandler}>
        <img
          src={this.state.clicked ? this.props.imgClicked : this.props.img}
          alt={'clicked: ' + this.state.clicked}
        />
      </div>
    );
  }
}
