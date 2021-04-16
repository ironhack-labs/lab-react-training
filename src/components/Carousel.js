import React from 'react';

class Carousel extends React.Component {
  state = {
    img: 0,
  };

  nextImg = () => {
    if (this.state.img < this.props.imgs.length - 1) {
      this.setState({ img: this.state.img + 1 });
    } else if (this.state.img === 3) {
      this.state.img = 0;
    }
  };

  pastImg = () => {
    if (this.state.img > 0) this.setState({ img: this.state.img - 1 });
  };

  changeImg = () => {
    if (this.nextImg()) {
      this.setState({ left: true });
    } else if (this.pastImg()) {
      this.setState({ right: true });
    }
  };

  render() {
    return (
      <div className="d-inline">
        <button className="right" onClick={this.pastImg}>
          Right
        </button>
        <img src={this.props.imgs[this.state.img]} className="photo" />
        <button className="left" onClick={this.nextImg}>
          Left
        </button>
      </div>
    );
  }
}

export default Carousel;
