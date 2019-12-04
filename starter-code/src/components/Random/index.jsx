import React, { Component } from "react";

class Random extends Component {
  render() {
    const props = this.props;
    return (
      <div>
        <h3>
          Random value between {props.min} and {props.max} =>
          {Math.floor(Math.random() * Math.floor(props.max))}
        </h3>
      </div>
    );
  }
}

export default Random;
