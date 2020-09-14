import React, { Component } from 'react';

class Random extends Component {
  render() {
    let random = Math.floor(
      Math.random() * (this.props.max - this.props.min) + this.props.min + 1
    );
    return (
      <div className="card">
        <p>
          Random value between {this.props.min} and {this.props.max} = {random}
        </p>
      </div>
    );
  }
}

export default Random;
