import React from 'react';
import './ClickablePicture.css';

export default class ClickablePicture extends React.Component {
    constructor(props) {
      super(props)
      this.state = {img: this.props.img, glasses: false}
    }

  getGlasses() {
    if (!this.state.glasses) {
      this.setState({img: this.props.imgClicked, glasses: true})
    } else {
      this.setState({img: this.props.img, glasses: false})
    }
  }

  render() {
    return (
        <img src={this.state.img} onClick={() => this.getGlasses()}/>
      );
  }
}
