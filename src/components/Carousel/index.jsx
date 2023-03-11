import React, { Component } from 'react';

class Carousel extends Component {
  state = {
    currentIndex: 0
  }
  render() {
    const {images} = this.props
    const goRight = () => {
      if(this.state.currentIndex) {
        this.setState(prevState => ({currentIndex: prevState.currentIndex - 1}))
      }
    }
    const goLeft = () => {
      if(this.state.currentIndex < images.length - 1) {
        this.setState(prevState => ({currentIndex: prevState.currentIndex + 1}))
      }
    }
    return (
      <div>
        <button onClick={goRight}>{"<"}</button>
        <img src={images[this.state.currentIndex]}/>
        <button onClick={goLeft}>{'>'}</button>
      </div>
    );
  }
}

export default Carousel