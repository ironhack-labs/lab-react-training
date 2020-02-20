import React, { Component } from 'react';

class Random extends Component {

  render() {
    return (
    <div className="Random"><p>Random value between {this.props.min} and  {this.props.max} =>{Math.floor(Math.random() * (this.props.max - this.props.min)+ this.props.min)}</p></div>
);

  }
}

export default Random;
