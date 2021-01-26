import React from 'react';
import './Dice.css';


const diceArray = ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png'];

class Dice extends React.Component {
    state = {
        diceImg: diceArray[Math.floor(Math.random() * diceArray.length)]
    }

    rollDice() {
        this.setState({
            diceImg: '/img/dice-empty.png'
        })
        setTimeout(() => {
            this.setState({
                diceImg: diceArray[Math.floor(Math.random() * diceArray.length)]
            })
        }, 1000)
    }

    render() {
        return (
            <img src={this.state.diceImg} alt="dice" onClick={() => { this.rollDice() }} />
        )
    }
}

export default Dice;