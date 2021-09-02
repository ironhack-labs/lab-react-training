import React, { Component } from 'react';

class Dice extends Component {

    constructor(props) {
        super(props);
    }

    rollDice = () => {
        let diceNr = Math.floor(Math.random()* (6 - 0) + 0);
        const diceOptions = [
            "./img/dice1.png",
            "./img/dice2.png",
            "./img/dice3.png",
            "./img/dice4.png",
            "./img/dice5.png",
            "./img/dice6.png",];
        return diceOptions[diceNr];
    }

    render() {
        return (
            <div class="dice">
                <p>{this.rollDice()}</p>
                <img src={this.rollDice()} alt="dice image" class="diceImg"/>
                
            </div>
        );
    }
}

export default Dice;

//on click a random number between 1-6 sould be selected
//