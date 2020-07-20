import React, { Component } from 'react';

export class Random extends Component {
  render() {
    return (
      <div>
        {`Random value between ${this.props.min} and ${this.props.max} => 
        ${Math.trunc(Math.random() * this.props.max)}`}
      </div>
    );
  }
}

export default Random;
