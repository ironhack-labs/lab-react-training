//Iteration 3 | Component: Random

import React, { Component } from "react";

class Random extends Component {
  render() {
      const min = Math.ceil(this.props.min);
      const max = Math.floor(this.props.max);
      const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return (
      <div>
        <p>
          Random value between {this.props.min} and {this.props.max} => {random}
        </p>
      </div>
    );
  }
}

export default Random