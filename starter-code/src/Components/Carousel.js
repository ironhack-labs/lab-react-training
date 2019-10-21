import React from 'react';

class Carousel extends React.Component {
  state = {
    img: this.props.imgs[0]
  }

  rightClickHandler = () => {
    let nextIdx = this.props.imgs.indexOf(this.state.img) + 1
    this.props.imgs[nextIdx] ? this.setState({ img: this.props.imgs[nextIdx] }) : this.setState({ img: this.props.imgs[0] })
  }

  leftClickHandler = () => {
    let nextIdx = this.props.imgs.indexOf(this.state.img) - 1
    this.props.imgs[nextIdx] ? this.setState({ img: this.props.imgs[nextIdx] }) : this.setState({ img: this.props.imgs[this.props.imgs.length - 1] })
  }

  render() {
    return (
      <div className="Carousel">
        <button onClick={this.leftClickHandler}>Left</button>
        <img src={this.state.img} alt="person" />
        <button onClick={this.rightClickHandler}>Right</button>
      </div>
    )
  }
}


export default Carousel;