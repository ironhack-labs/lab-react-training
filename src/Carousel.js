import React, { Component } from 'react';

export class Carousel extends Component {

  state = {
    image: 0,
  };

  clickLeft = () => {
    let nextImage = this.state.image - 1;
    if (nextImage < 0) nextImage = 3
    else nextImage = nextImage % 4;

    this.setState((state, props) => ({
      image: nextImage
    }));
  };

  clickRight = () => {
    let nextImage = (this.state.image + 1) % 4;
    this.setState((state, props) => ({
        image: nextImage
    }));
  };

  render() {
    return (
      <div style={{ display: 'flex', justifyContent:'center', alignContent:'center', gap:'20px', padding:'50px 0px'}}>
        <button style={{height:'50px', padding:`10px`, borderRadius: '5px'}} onClick={this.clickLeft}> {'<'} </button>
            <img style={{ width: '300px' }} src={this.props.imgs[this.state.image]} alt="carousel" />
        <button style={{height:'50px', padding:`10px`, borderRadius: '5px'}} onClick={this.clickRight}> {'>'} </button>
      </div>
    );
  }
}

export default Carousel;
