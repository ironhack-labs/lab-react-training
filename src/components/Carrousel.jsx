import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: this.props.imgs,
      position: 0,
    };
  }
  previousImage = ({ target }) => {
    (this.state.position > 0) === (this.state.position)
    }
  };
  nextImage = () => {
    if (this.state.position < 3) {
      this.setState((state) => ({ position: state.position++ }));
    }
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
