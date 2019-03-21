import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      indexImgs: 0
    }
    // handleClick is already bound in the render
  }
  handleClick(delta) {
    let length = this.props.imgs.length
		this.setState(prevState => ({
      indexImgs: (prevState.indexImgs + delta + length) % length
    }))
  }
  render() {
    let src = this.props.imgs[this.state.indexImgs]
    return (
      <div className="Carousel">
        <button onClick={()=>this.handleClick(-1)}>Left</button>
        <img
          src={src}
          alt="carousel" />
        <button onClick={()=>this.handleClick(1)}>Right</button>
      </div>
    );
  }
}

export default Carousel;
