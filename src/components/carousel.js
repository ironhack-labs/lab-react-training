import React, { Component } from "react";

class Carousel extends Component {

  state = {
    images: this.props.imgs,
    currentIndex: 0,
  }

  previous = () => {
    console.log(this.state.currentIndex);
    if (this.state.currentIndex === 0) {
      this.setState({
        currentIndex: 3,
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex - 1,
      });
    }
  }

  next = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      this.setState({
        currentIndex: 0,
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
      });
    }
  }

  render () {
    const { imgs } = this.props;
    return (
      <div className="carousel-box">
        <img className="carousel-img" src={imgs[this.state.currentIndex]} alt=""/>
        <div> 
          <button onClick={this.previous}>Previous</button>
          <button onClick={this.next}>Next</button>
        </div>
      </div>
    )
  }
}

export default Carousel;