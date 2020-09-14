import React, { Component } from 'react';

// Definition of the component Random
class Random extends Component {
  render() {
    let randomValue = this.props.min + Math.floor(Math.random() * (this.props.max-this.props.min+1))
    return (
      <div className="box">
        <p>Random value between {this.props.min} and {this.props.max} => {randomValue}</p>
      </div>
    );
  }
}

export default Random;