import React, { Component } from 'react';
import './style.css';

class Random extends Component {
  getRand = (min, max) =>{
    return Math.floor(Math.random() * max) + min;
  }
  render(){
    let {min, max} = this.props
    return(
      <div className='box'>
        {this.getRand(min, max)}
      </div>
    )
  }
}

export default Random;