import React, { Component } from 'react';

export default class Random extends Component{

  getRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  render(){
    const { min, max } = this.props
    return(
    <p className="encuadred">Random value between {min} and {max} => {this.getRand(min, max)}</p>
    ); 
  }
}