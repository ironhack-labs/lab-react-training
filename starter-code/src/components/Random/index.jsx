import React, { Component } from "react";
import "./Random.css";

class Random extends Component {
  render() {
    const { min, max } = this.props;
    return (
      <div className="border rounded-sm mb-2">
        <p>
          Random value between {min} and {max} =>{" "}
          {Math.floor(Math.random() * (max - min))}
        </p>
      </div>
    );
  }
}

export default Random;
