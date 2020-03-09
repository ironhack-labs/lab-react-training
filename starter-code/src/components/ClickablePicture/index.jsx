import React, { Component } from 'react';
import './style.scss';

class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.img
    };
    this.changeImg = this.changeImg.bind(this);
  }
  changeImg() {
    this.setState(previousState => ({
      img: (previousState.img === this.props.img && this.props.imgClicked) || this.props.img
    }));
  }

  render() {
    // const { img, imgClicked } = this.props;

    return <img onClick={this.changeImg} src={this.state.img} alt="nice" />;
  }
}

export default ClickablePicture;
