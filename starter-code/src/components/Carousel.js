import React, { Component } from "react";

export default class Carousel extends Component {
  state = {
    index: 0,
    next: 0,
    images: {
        0: this.props.imgs[0],
        1: this.props.imgs[1],
        2: this.props.imgs[2],
        3: this.props.imgs[3],
    }
  };

  render() {
    // console.log(this.props.imgs[this.state.index]);
    if(this.state.next===5){
        this.setState({
            index: 0,
            next: 0
        })
    } 
    else if(this.state.next===-2){
        this.setState({
            index: 3,
            next: 3
        })
    }
    let indexUpdate = this.state.index 
    let right = () => {
      indexUpdate += 1;
      this.setState({
        index: indexUpdate,
        next: indexUpdate + 1
      });
    };
    let left = () => {
     indexUpdate = this.state.index 
      indexUpdate -= 1;
      this.setState({
        index: indexUpdate,
        next: indexUpdate - 1
      });
    };
    console.log(this.state.index)
    return (
      <div className="carousel">
        <button onClick={left}>Left</button>
        <img
          src={this.props.imgs[this.state.index]}
          alt={this.props.imgs[this.state.index]}
        />

        <button onClick={right}>Right</button>
      </div>
    );
  }
}
