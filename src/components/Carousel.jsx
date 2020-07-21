import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: this.props.imgs,
      position: 0,
    };
  }
  previousImage = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    } else this.setState({ counter: this.props.imgs.length - 1 });
    
  };

  nextImage = () => {
    if (this.state.counter >= 0 && this.state.counter < this.props.imgs.length - 1) {
      this.setState({ counter: this.state.counter + 1 });
    } else this.setState({ counter: 0 });
  };

  render() {
    return (
      <div className="carousel">
        <div>
          <img src={this.state.imgs[this.state.position]} alt="carousel" />
        </div>
        <button onClick={this.previousImage}>Previous Image</button>
        <button onClick={this.nextImage}>Next Image</button>
      </div>
    );
  }

}
export default Carousel;
