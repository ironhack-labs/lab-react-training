import React, { Component } from "react";
import Button from '../Button';
import "./style.css";

export default class Carrousel extends Component {
    state = {
        img: this.props.imgs[0],
        imgs: this.props.imgs
    }

    getRandomNum() {
        console.log('random', this.state.imgs.length)
        return Math.trunc(Math.random() * ((this.state.imgs.length) - 0) + 0);
    }

    move = () => {
        this.setState({
            img: this.state.imgs[this.getRandomNum()]
        })
    }
  
  render() {
    return (
        <div>
            <Button onAction={this.move}> Left </Button> 
            <img src={`${this.state.img}`} alt="carrousel"/>
            <Button onAction={this.move}> Right </Button>
        </div>
    );
  }
}
