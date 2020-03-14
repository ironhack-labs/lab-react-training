import React, { Component } from "react";
import './ClickablePicture.css'

class ClickablePicture extends Component {
  state = {
    isClicked: false
  }

  handleClick = () => {
    if(!this.state.isClicked) {
      this.setState({
        isClicked: true
      })
    } else {
      this.setState({
        isClicked: false
      })
    }
  }

  render() {
    return (
        <img onClick={this.handleClick} className="clickablePciture" src={ !this.state.isClicked ? this.props.img : this.props.imgClicked} alt="cool guy"/>
    );
  }
};

export default ClickablePicture;
