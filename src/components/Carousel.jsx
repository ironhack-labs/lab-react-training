import React, { Component } from 'react';

export class Carousel extends Component {
  state = { index: 0 };
  clickHandler = (event) => {
    let direction = event.target.value;
    let max = this.props.imgs.length - 1;
    let stateIndex = this.state.index;
    if (direction === 'back') {
      this.setState({
        index: stateIndex - 1 < 0 ? max : stateIndex - 1,
      });
    }
    if (direction === 'forth') {
      this.setState({
        index: stateIndex + 1 > max ? 0 : stateIndex + 1,
      });
    }
  };

  render() {
    return (
      <div className="border-box">
        <img src={this.props.imgs[this.state.index]} alt="" />
        <hr />
        <button value="back" onClick={this.clickHandler}>
          Before
        </button>
        <button value="forth" onClick={this.clickHandler}>
          Next
        </button>
      </div>
    );
  }
}

export default Carousel;
