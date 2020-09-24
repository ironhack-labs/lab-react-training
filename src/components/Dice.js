import React, { Component } from 'react'
import './components.css'

class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diceFace: [
                '/img/dice-empty.png',
                '/img/dice1.png',
                '/img/dice2.png',
                '/img/dice3.png',
                '/img/dice4.png',
                '/img/dice5.png',
                '/img/dice6.png'
            ]
        };
    };

    render() {
        let randomDice = 1 + Math.floor(Math.random() * 6);
        return (
            <img 
                className="Dice clickable" 
                src={this.state.diceFace[randomDice]} 
                alt="dice"/>
        );
    };
}

export default Dice;
