import React, { Component } from 'react';

export default class ClickablePicture extends Component {
  state = {
    glassesOn: false,
  };

  handleImageSwitch = () => {
    this.setState({
      glassesOn: !this.state.glassesOn,
    });
  };

  render() {
    return (
      <div>
        {this.state.glassesOn ? (
          <img
            onClick={this.handleImageSwitch}
            style={{ width: '200px' }}
            src={this.props.imgClicked}
            alt="glasses"
          />
        ) : (
          <img
            onClick={this.handleImageSwitch}
            style={{ width: '200px' }}
            src={this.props.img}
            alt="no-glasses"
          />
        )}
      </div>
    );
  }
}
