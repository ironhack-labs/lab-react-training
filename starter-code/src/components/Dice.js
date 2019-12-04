import React, { Component } from 'react';

class Dice extends Component {
    state = {
        displayedDice: '/img/dice6.png',
        dice: {
            0: '/img/dice1.png',
            1: '/img/dice2.png',
            2: '/img/dice3.png',
            3: '/img/dice4.png',
            4: '/img/dice5.png',
            5: '/img/dice6.png'
        }
    }

    randomDice = () => {
        this.setState({
            displayedDice: '/img/dice-empty.png'
        })
        setTimeout(() => {
            this.setState({
                displayedDice: this.state.dice[Math.floor(Math.random() * 6)]
            })
        }, 1000)
    }
    render() {
        return (
            <div id="Dice">
                <img className="Dice" onClick={this.randomDice} src={this.state.displayedDice} alt="" />
            </div>
        )
    }
}

export default Dice;