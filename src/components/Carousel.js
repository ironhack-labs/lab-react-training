import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  clickLeft = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    } else {
      this.setState({ counter: this.props.imgs.length - 1 });
    }
  };

  clickRight = () => {
    if (this.state.counter >= 0 && this.state.counter < this.props.imgs.length - 1) {
      this.setState({ counter: this.state.counter + 1 });
    } else {
      this.setState({ counter: 0 });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.clickLeft} className="like-button">Left</button>
        <img
          src={this.props.imgs[this.state.counter]}
          alt="avatar"
          className="dices"
        />
        <button onClick={this.clickRight} className="like-button">Right</button>
      </div>
    );
  }
}

export default Carousel;
