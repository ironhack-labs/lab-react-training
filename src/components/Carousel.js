import React, { Component } from 'react';


class Carousel extends Component {
  state = {
    index: 0
  }

  handleClickRight = () => {
    this.setState({ index: this.state.index < this.props.imgs.length -1 ? this.state.index +1 : 0 })
  }

  handleClickLeft = () => {
    this.setState({  index: this.state.index > 0 ? this.state.index -1 : 3 })
  }

  render() {
    return (
      <div className="carousel-container">
        <img className="carousel-image" src={this.props.imgs[this.state.index]} alt="Carousel"/>
        <div className="box-buttons-carousel">
          <button className="carousel-button" onClick={this.handleClickLeft}>Left</button>
          <button className="carousel-button" onClick={this.handleClickRight}>Right</button>
        </div>
        
      </div>
    );
  }
}

export default Carousel;