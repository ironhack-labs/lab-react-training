import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  handleClickLeft = () => {
    if (this.state.index === 0) {
      this.setState({
        index: 3,
      });
    } else {
      this.setState({
        index: this.state.index - 1,
      });
    }
  };

  handleClickRight = () => {
    if (this.state.index === 3) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
    }
  };

  render() {
    return (
      <div>
        <img src={this.props.imgs[this.state.index]} alt="img" />
        <button
          className="border border-black rounded-md m-4 p-6 bg-green-300 font-semibold"
          onClick={this.handleClickLeft}
        >
          Left
        </button>
        <button
          className="border border-black rounded-md m-4 p-6 bg-green-300 font-semibold"
          onClick={this.handleClickRight}
        >
          Right
        </button>
      </div>
    );
  }
}

export default Carousel;
