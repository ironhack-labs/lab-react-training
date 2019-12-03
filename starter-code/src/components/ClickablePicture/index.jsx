import React, { Component } from "react";

class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.tooglePicture = this.tooglePicture.bind(this);
    this.state = {
      imgState: "unclicked",
      img: this.props.img
    };
  }

  tooglePicture() {
    console.log(this);
  }

  render() {
    const imgSrc = require(this.props.img);
    return (
      <div>
        <img
          className="clickablePicture"
          src={imgSrc}
          alt=""
          onClick={() => this.tooglePicture()}
        />
      </div>
    );
  }
}

export default ClickablePicture;
