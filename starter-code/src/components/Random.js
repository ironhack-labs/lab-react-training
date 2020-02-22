import React, { Component } from "react";

class Random extends Component {
  constructor(props) {
    super(props);

    this.min = Number;
    this.max = Number;
  }

  render() {
    return (
      <div className="Flex">
        <p>
          Random value between {this.props.min} and {this.props.max} =>{" "}
          {Math.ceil(Math.random(this.props.min) * this.props.max)}
        </p>
      </div>
    );
  }
}

export default Random;
