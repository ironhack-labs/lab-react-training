import React, { Component } from 'react'

export default class Dice extends Component {

    state = {
        dice: './img/dice1.png',
    }

    clickHandler = () => {
        const toss = ['./img/dice1.png', './img/dice2.png', './img/dice3.png', './img/dice4.png', './img/dice5.png', './img/dice6.png'];
        const empty = './img/dice-empty.png';
        const random = toss[Math.floor(Math.random() * 6)];
        const timer = setInterval(() => {
            this.setState({
                dice: empty
            })
        }, 10000);
        clearInterval(timer);
        this.setState({
            dice: random
        });
    }

    render() {
        return (
            <div>
                <img src={ this.state.dice } onClick={ this.clickHandler } alt="dice"/>
            </div>
        )
    }
}
