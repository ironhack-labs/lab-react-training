import React, { Component } from 'react'

class Carousel extends Component {
  state = {
    counter: 0
  }

  handleClickLeft = () => {
    if (this.state.counter === 0) this.setState({counter: this.props.imgs.length -1});
    else this.setState({counter: this.state.counter -1});
  }

  handleClickRight = () => {
    if (this.state.counter === this.props.imgs.length -1) this.setState({counter: 0});
    else this.setState({counter: this.state.counter +1});
  }


  render() {
    return (
      <div>
        <button onClick={this.handleClickLeft} className="buttons">⬅️ Left</button>
        <img src={this.props.imgs[this.state.counter]} alt=""/>
        <button onClick={this.handleClickRight} className="buttons">Right ➡️</button>
      </div>
    )
  }
}

export default Carousel;
