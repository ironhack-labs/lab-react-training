import React, { Component } from 'react';



class Random extends Component {
  
  

  render() {
    const { min, max } = this.props;
    const randomNumber = Math.floor(Math.random() * max) + 1;
    return (
    <p className="random-box">Random value between {min} and {max} => {randomNumber}</p>
    )
  }
}

export default Random;