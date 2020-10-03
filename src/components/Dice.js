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
            ],
            imgSrc: '/img/dice1.png'
        };
    };

    diceClick = async (event) => {
        await this.setState({
            imgSrc: this.state.diceFace[0]
        });
        setTimeout(() => {
            this.setState({
                imgSrc: this.state.diceFace[1 + Math.floor(Math.random() * 6)]
            })
        }, 1000);
    }

    render() {
        return (
            <img 
                onClick={this.diceClick}
                className="Dice clickable" 
                src={this.state.imgSrc} 
                alt="dice"/>
        );
    };
}

export default Dice;
