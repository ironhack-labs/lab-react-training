import React, { Component } from 'react'

export default class Carousel extends Component {

  constructor(){
    super()
    this.state = {
      imageIndex: 0
    }
  }

  /* Improve */
  nextImage = () => {
    let newIndex
    if (this.state.imageIndex + 1 < (this.props.imgs.length-1)) newIndex = this.state.imageIndex + 1
    else newIndex = 0
    this.setState({imageIndex: newIndex})
  }

  /* Improve */
  prevImage = () => {
    let newIndex
    if (this.state.imageIndex-1 < 0) newIndex = this.props.imgs.length-1
    else newIndex = this.state.imageIndex - 1
    this.setState({imageIndex: newIndex})
  }

  render() {
    return (
      <div>
        <img src={this.props.imgs[this.state.imageIndex]} alt=""/>
        <button onClick={this.nextImage}>Next</button>
        <button onClick={this.prevImage}>Prev</button>
      </div>
    )
  }
}
