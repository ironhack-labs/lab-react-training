import React, { Component } from "react";

class ClickablePicture extends Component {
  
  state = {
    active: false,
  }

  changePicture = (img, imgClicked) => {
    if (this.state.active === false ) {
      return img;
    } else {
      return imgClicked;
    }
  }

  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };
  
  render () {
    const { img, imgClicked } = this.props;
    return (
      <div className="picture-box">
        <img onClick={this.toggleClass} className="picture-clickable" src={this.changePicture(img, imgClicked)} alt=""/>
      </div>
    )
  }
}

export default ClickablePicture;