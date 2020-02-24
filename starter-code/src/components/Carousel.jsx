import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: props.imgs,
      idx: 0
    }
  }

  leftClick = () => {
    let newIdx = (this.state.idx !== 0) ? this.state.idx - 1: this.state.imgs.length - 1;
    this.setState({
      idx: newIdx
    })
  };

  rightClick = () => {
    let newIdx = (this.state.idx !== this.state.imgs.length -1) ? this.state.idx + 1: 0;
    this.setState({
      idx: newIdx
    })
  };

  render() {
    return (
      <div className="Carousel">
        <button onClick={this.leftClick}>Left</button>
        <img src={this.state.imgs[this.state.idx]} alt="carousel"/>
        <button onClick={this.rightClick}>Right</button>
      </div>
    );
  }
}

export default Carousel;