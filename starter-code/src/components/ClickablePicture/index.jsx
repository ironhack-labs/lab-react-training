import React, { Component } from 'react';
import './style.css';

class ClickablePicture extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
    this.toggleImgClick = this.toggleImgClick.bind(this);
  }

  toggleImgClick() {
    this.setState(previousState => ({
      active: !previousState.active
    }));
  }

  render() {
    const { img, imgClicked } = this.props;

    return (
      <img
        src={(this.state.active && imgClicked) || img}
        alt="man"
        onClick={this.toggleImgClick}
        className="clickable-img"
    
      />
    );
  }
}

export default ClickablePicture;
