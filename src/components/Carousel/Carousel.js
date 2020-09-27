import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
  state = {
    // images: this.props.imgs,
    currentIdx: 0,
  };

  changeImge = (dir) => {
    if (dir === 'L') {
      if (this.state.currentIdx === 0) {
        this.setState({ currentIdx: this.props.imgs.length - 1 });
      } else {
        this.setState({ currentIdx: this.state.currentIdx - 1 });
      }
    } else {
      if (this.state.currentIdx === this.props.imgs.length - 1) {
        this.setState({ currentIdx: 0 });
      } else {
        this.setState({ currentIdx: this.state.currentIdx + 1 });
      }
    }
  };

  render() {
    console.log('carousal: ', this.state.currentIdx);
    return (
      <div>
        <button onClick={() => this.changeImge('L')}> &lt; </button>
        <img src={this.props.imgs[this.state.currentIdx]} />
        <button onClick={() => this.changeImge('R')}> &gt; </button>
      </div>
    );
  }
}

export default Carousel;
