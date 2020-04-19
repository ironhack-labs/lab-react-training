import React, { Component } from "react";
import Rating from "../Rating"
import "./style.css";

export default class DriverCard extends Component {
    state = {
        likes: 0,
        color: ['purple','blue','green','yellow','orange','red'],
    }

    getColor = () => {
        return this.state.color[this.getRandomNum(this.state.color.length)];
    }

    getRandomNum(max) {
        return Math.trunc(Math.random() * (max - 0) + 0);
    }

    handleClick = () => {
        this.setState({
            likes: this.state.likes + 1
        })
        return this.state.likes
    }
  
  render() {
    const { likes } = this.state;
    return (
      <button onClick={this.handleClick}
        style={{backgroundColor:`${this.getColor()}`}}
      > {likes}  Likes </button>
    );
  }
}




  //['purple','blue','green','yellow','orange','red']