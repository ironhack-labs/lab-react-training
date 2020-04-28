import React, { Component } from "react";
import "../index.css"

class Dice extends Component {
    state = {
        img: "img/dice-empty.png"
    }

    randomImg = () => {
        let diceImg = ["img/dice1.png", "img/dice2.png", "img/dice3.png", "img/dice4.png", "img/dice5.png", "img/dice6.png"];
        let { img } = this.state;
        let i = Math.floor(Math.random() * diceImg.length);
        img = diceImg[i];
        this.setState({ img });
    }

    render() {
        const {img} = this.state;
        const { randomImg } = this;

        return (
            <img className="clickable-picture" src={img} onClick={randomImg} alt="" />
        )
    }
}

export default Dice;