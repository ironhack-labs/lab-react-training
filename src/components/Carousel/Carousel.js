import React, { Component } from 'react';

class Carousel extends Component {
  state = {
      fullImage: this.props.images,
      image: 0
    }
  
  nextImage = () => {
    if (this.state.image >= 0 && this.state.image <= 2) {
      this.setState({
        image: this.state.image + 1
      })
    }    
  } 

  previousImage = () => {
    if (this.state.image < 4 && this.state.image > 0) {
      this.setState({
        image: this.state.image - 1
      })
    }
  }

  render() {
    return (
      
      <div>
      
        <img src={this.state.fullImage[this.state.image]} alt="random images" />
        <button onClick={this.previousImage}>Previous</button>
        <button onClick={this.nextImage}>Next</button>
      </div>
    )
  }
}

export default Carousel