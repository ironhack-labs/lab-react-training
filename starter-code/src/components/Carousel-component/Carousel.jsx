import React, { Component } from "react";

class Carousel extends Component {
  state = {
    carouselImg: this.props.imgs[0]
  };

  clickedLeft = () => {
    let nextIdx = this.props.imgs.indexOf(this.state.carouselImg) - 1;
    this.props.imgs[nextIdx]
      ? this.setState({ carouselImg: this.props.imgs[nextIdx] })
      : this.setState({
          carouselImg: this.props.imgs[this.props.imgs.length - 1]
        });
  };

  clickedRight = () => {
    let nextIdx = this.props.imgs.indexOf(this.state.carouselImg) + 1;
    this.props.imgs[nextIdx]
      ? this.setState({ carouselImg: this.props.imgs[nextIdx] })
      : this.setState({ carouselImg: this.props.imgs[0] });
  };

  render() {
    return (
      <div>
        <img
          height="100px"
          width="100px"
          src={this.state.carouselImg}
          alt={this.state.carouselImg}
        />
        <p></p>
        <button onClick={this.clickedLeft}>Previous</button>
        <button onClick={this.clickedRight}>Next</button>
      </div>
    );
  }
}

export default Carousel;
