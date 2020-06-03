import React, { Component } from 'react';

class Carousel extends Component {
  state = { imgs: this.props.imgs, index: 0 };

  nextClickHandler = () => {
      if (this.state.index <3) {
          this.setState({
              index: this.state.index + 1
          })
      }
  };

  previousClickHandler = () => {
    if (this.state.index > 0) {
        this.setState({
            index: this.state.index - 1
        })
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.previousClickHandler}>Previous</button>
        <img src={this.state.imgs[this.state.index]} alt=""/>
        <button onClick={this.nextClickHandler}>Next</button>
      </div>
    );
  }
}

export default Carousel;
