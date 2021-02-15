import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: 0,
    };
  }

  handleClickLeft = () => {
    let nextImage = this.state.image - 1;
    if (nextImage < 0) {
      nextImage = 3;
    } else {
      nextImage = nextImage % 4;
    }

    this.setState({ image: nextImage });
  };

  handleClickRight = () => {
    let nextImage = (this.state.image + 1) % 4;

    this.setState({ image: nextImage });
  };

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <button type="button" onClick={this.handleClickLeft}>
          -
        </button>
        <img src={this.props.imgs[this.state.image]} alt="carousel-img" />
        <button type="button" onClick={this.handleClickRight}>
          +
        </button>
      </div>
    );
  }
}

export default Carousel;
