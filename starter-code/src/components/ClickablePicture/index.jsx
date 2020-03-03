import React, { Component } from 'react';
import './style.scss';

class ClickablePicture extends Component {
  constructor(img, imgClicked) {
    super();
    this.state = {
      active: true
    };
    this.togglePic = this.togglePic.bind(this);
  }

  togglePic() {
    this.setState(previousState => ({
      active: !previousState.active
    }));
  }

  render() {
    return (
      <img
        src={
          this.state.active
            ? process.env.PUBLIC_URL + this.props.img
            : process.env.PUBLIC_URL + this.props.imgClicked
        }
        alt="random"
        onClick={this.togglePic}
      />
    );
  }
}

export default ClickablePicture;
