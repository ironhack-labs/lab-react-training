import React, { Component } from "react";
import "./style.css";

export default class DriverCard extends Component {
    state = {
        img: 'dice-empty.png'
    }

    getRandomNum() {
        return Math.trunc(Math.random() * (7 - 1) + 1);
    }

    handleClick = () => {
        this.setState({
            img: `dice${this.getRandomNum()}.png`
        });
    }
  
  render() {
   // const { likes, style } = this.state;
    return (
        <img src={`./img/${this.state.img}`} onClick={this.handleClick} alt="dice" className="imgdice"/>
    );
  }
}