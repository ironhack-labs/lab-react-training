import React, { Component } from 'react';

export default class Random extends Component {
  render() {
    const min = this.props.min;
    const max = this.props.max;
    const rnd = Math.floor(Math.random() * (max - min + 1) + min);

    return (
      <div>
        Random value between {min} and {max} ={'>'} {rnd}
      </div>
    );
  }
}
