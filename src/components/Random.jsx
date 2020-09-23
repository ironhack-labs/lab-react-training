import React, { Component } from 'react';

export default class Random extends Component {
  render() {
    return (
      <div>
        Random Value between {this.props.min} and {this.props.max} =>{' '}
        {Math.floor(
          Math.random() * (this.props.max - this.props.min) + this.props.min
        )}
      </div>
    );
  }
}
