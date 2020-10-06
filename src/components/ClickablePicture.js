import React, { Component } from 'react';

class ClickablePicture extends Component {
  state = {
    clicked: false,
  };

  displayImage = () => {
    this.state.originImg = '/img/persons/maxence-glasses.png';
  };

  render() {
    return (
      <div>
        <img
          onClick={() => {
            this.setState({ clicked: !this.state.clicked });
          }}
          src={
            '/img/persons/' +
            (this.state.clicked ? 'maxence-glasses.png' : 'maxence.png')
          }
          alt="Image Profile"
        />

      </div>
    );
  }
}

export default ClickablePicture;
