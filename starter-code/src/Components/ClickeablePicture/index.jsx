import React, { Component } from "react";

export class ClickeablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: `${this.props.img}`
    };
    this.changeImage = this.changeImage.bind(this);
  }
  changeImage() {
    const img1 = this.props.img;
    const img2 = this.props.imgClicked;
    if (this.state.image === `${img1}`) {
      this.setState({
        image: `${img2}`
      });
    } else {
      this.setState({
        image: `${img1}`
      });
    }
  }

  render() {
    return (
      <div>
        <img onClick={this.changeImage} src={`${this.state.image}`} alt="" />
      </div>
    );
  }
}

export default ClickeablePicture;
