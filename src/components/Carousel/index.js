import React, { Component } from 'react'

export default class Carousel extends Component {
  state = {
    indx: 0,
  }

  handleClick = (indx) => {
    const length = this.props.imgs.length
    this.setState({
      indx: (indx + length) % length,
    })
  }

  render() {
    const src = this.props.imgs[this.state.indx]
    return (
      <div>
        <button onClick={() => this.handleClick(-1)}>left</button>
        <img src={src} alt="" />
        <button onClick={() => this.handleClick(1)}>right</button>
      </div>
    )
  }
}
