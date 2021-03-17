import React, { Component } from 'react';

export class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { imgsIndex: 0 };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleNext = (imgs) => {
    this.setState({
      imgsIndex:
        // this.state.imgsIndex > imgs.length
        //   ? this.state.imgsIndex % img
        //   : this.state.imgsIndex + 1,
    });
  };

  handlePrev = (imgs) => {
    this.setState({
      imgsIndex:
        this.state.imgsIndex < 0 ? imgs.length : this.state.imgsIndex - 1,
    });
  };

  render() {
    return (
      <div>
        <img src={this.props.imgs[this.state.imgsIndex]} alt="" />
        <button onClick={this.handlePrev}>Prev</button>
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}

// export default Carousel;
