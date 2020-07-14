import React, { Component } from 'react'

export default class Dice extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            pic: "/img/dice5.png",
            dice: [
                '/img/dice1.png',
                '/img/dice2.png',
                '/img/dice3.png',
                '/img/dice4.png',
                '/img/dice5.png',
                '/img/dice6.png'
            ]
        }
    }
    rollDice = () => {
        this.setState(({pic}) => ( {pic: "/img/dice-empty.png" } ))
        setTimeout(this.randomPic, 1000)
    }

    randomPic = () => {
        this.setState(({pic}) => ( {pic: this.state.dice[Math.floor(Math.random() * 6)] } ))
    }
    
    render() {
        return (
            <div className="dice">
                <img src={this.state.pic} alt="Dice" onClick={this.rollDice}></img>
            </div>
        )
    }
}
