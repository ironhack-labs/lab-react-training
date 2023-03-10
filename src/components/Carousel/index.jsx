import './index.css';
import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images,
      shownImage: props.images[0],
    };
  }

  moveLeft = () => {
    const { images, shownImage } = this.state;

    const currentIndexImg = images.indexOf(shownImage);
    const nextIndexImg = (currentIndexImg - 1) % images.length;

    if (nextIndexImg < 0) {
      return images[images.length - 1];
    } else {
      return images[nextIndexImg];
    }
  };

  handleLeftBtn = () => {
    this.setState({
      shownImage: this.moveLeft(),
    });
  };

  moveRight = () => {
    const { images, shownImage } = this.state;

    const currentIndexImg = images.indexOf(shownImage);
    const nextIndexImg = (currentIndexImg + 1) % images.length;

    return images[nextIndexImg];
  };

  handleRightBtn = () => {
    this.setState({
      shownImage: this.moveRight(),
    });
  };

  render() {
    return (
      <div className="Carousel">
        <button onClick={this.handleLeftBtn}>Left</button>
        <img src={this.state.shownImage} alt="..." />
        <button onClick={this.handleRightBtn}>Right</button>
      </div>
    );
  }
}

export default Carousel;
