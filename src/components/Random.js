import React, { Component } from "react";

class Random extends Component {
  render() {
    const { min, max } = this.props;
    const random = Math.floor(Math.random() * (max - min)) + min;
    return (
      <div>
        <p>
          Random value between {min} and {max} => {random}
        </p>
      </div>
    );
  }
}

export default Random;
