import React, { Component } from 'react';
import style from './Carousel.module.css';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  changeSlide(dir) {
    const currentIndex = this.state.index;
    const lastIndex = this.props.imgs.length - 1;
    let newIndex;

    if (dir === -1) {
      newIndex = currentIndex === 0 ?  lastIndex : currentIndex - 1;
    } else {
      newIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    };

    this.setState({
      index: newIndex
    })     
  }

  render() {
    return (
      <div className={style.container}>
        <button onClick={() => this.changeSlide(-1)}> 
          Left
        </button>
        <img src={this.props.imgs[this.state.index]} alt="ironhack" />
        <button onClick={() => this.changeSlide(1)}>
          Right
        </button>
      </div>
    )
  }
}
