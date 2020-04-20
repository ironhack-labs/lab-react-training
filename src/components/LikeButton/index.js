import React, { Component } from "react";
import "./style.css";

export default class DriverCard extends Component {
    state = {
        likes: 0,
        color: ['purple','blue','green','yellow','orange','red'],
        style: ''
    }

    getRandomNum(max) {
        return Math.trunc(Math.random() * (max - 0) + 0);
    }

    handleClick = () => {
        this.setState({
            likes: this.state.likes + 1,
            style: this.state.color[this.getRandomNum(this.state.color.length)]
        });
    }
  
  render() {
    const { likes, style } = this.state;
    return (
      <button onClick={this.handleClick}
        style={{backgroundColor:`${style}`}}
      > {likes}  Likes </button>
    );
  }
}