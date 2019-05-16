import React, { Component } from "react";

class Carousel extends Component {
  state = {
    image: "",
    images: []
  };

  constructor(props) {
    super(props);
    this.state = {
      image: props.imgs[0],
      images: props.imgs
    };
  }

  nextImg = () => {
    let { image, images } = this.state;
    images.push(images.shift());
    image = images[0];
    this.setState({ image, images });
  }

  prevImg = () => {
    let { image, images } = this.state;
    images.unshift(images.pop());
    image = images[0];
    this.setState({ image, images });
  }

  render() {
    const { image } = this.state;
    return (
      <div>
        <button onClick={this.prevImg}>Left</button>
        <img src={image} alt="carousel" />
        <button onClick={this.nextImg}>Right</button>
      </div>
    );
  }
}

export default Carousel;
