import React, { Component } from 'react'

export default class Dice extends Component {
    constructor(props){
        super(props);
        this.state = {
            diceShown: [
                '/img/dice-empty.png',
                '/img/dice1.png',
                '/img/dice2.png',
                '/img/dice3.png',
                '/img/dice4.png',
                '/img/dice5.png',
                '/img/dice6.png',
            ],
            diceSrc: '/img/dice3.png'
        }
    }

    rollDice = async (event) => {
        await this.setState({
            diceSrc: this.state.diceShown[0]
        });
        setTimeout(() => {
            this.setState({
                diceSrc: this.state.diceShown[1 + Math.floor(Math.random()*6)]
            })
        }, 1000)
    }

    render() {
        console.log(this.state.diceSrc)
        return (
            <div className="dice-img">
                <img onClick={this.rollDice} src={this.state.diceSrc} alt="dice" />
            </div>
        )
    }
}
