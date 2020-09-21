import React from 'react'
import './Carousel.css'

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: props.imgs[0]
    }
    this.i = 0
  }

  left() {
    this.i <= 0 ? this.i = (this.props.imgs.length - 1) : this.i--
    this.setState({
      img: this.props.imgs[this.i]
    })
  }

  right() {
    this.i >= (this.props.imgs.length - 1) ? this.i = 0 : this.i++
    this.setState({
      img: this.props.imgs[this.i]
    })
  }

  render() {
    return (
      <div className="Carousel">
        <button onClick={() => this.left()}>Left</button>
        <img src={this.state.img} alt="Carousel"/>
        <button onClick={() => this.right()}>Right</button>
      </div>
    );
  }
}