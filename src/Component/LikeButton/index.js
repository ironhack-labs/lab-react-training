import React, { Component } from "react";

export default class LikeButton extends Component {
  state = {
    counter: 0,
    colors: ["purple", "blue", "green", "yellow", "orange", "red"],
    selectedColor: "blue",
  };

  addOne = () => {
    let newCounter = this.state.counter + 1;
    let colorNum = Math.floor(Math.random() * 7);
    this.setState({
      counter: newCounter,
      selectedColor: this.state.colors[colorNum],
    });
  };

  render() {
    return (
      <div>
        <button
          className="like-button"
          style={{ backgroundColor: `${this.state.selectedColor}` }}
          onClick={this.addOne}
        >
          {" "}
          {this.state.counter} likes{" "}
        </button>
      </div>
    );
  }