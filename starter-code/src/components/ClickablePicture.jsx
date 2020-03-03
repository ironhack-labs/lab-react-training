import React, { Component } from 'react';
import './ClickablePicture.css';

class ClickablePicture extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
    this.togglePicture = this.togglePicture.bind(this);
  }

  togglePicture() {
    this.setState(previousState => ({
      active: !previousState.active
    }));
  }

  render() {
    const { img, imgClicked } = this.props;
    return (
      <img
        src={(this.state.active && imgClicked) || img}
        alt="toggle"
        onClick={this.togglePicture}
        className="ClickablePicture"
      />
    );
  }
}

export default ClickablePicture;
