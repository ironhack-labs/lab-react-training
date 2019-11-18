import React, { Component } from 'react';
import './dice.css';

export default class Dice extends Component {
    changeDice = () => {
        setInterval(() => {
            setTimeout(() => {
                this.props.randomRoll();
            },500)     
        }, 2000);
        
    }
    render() {
        return (
            <div className="dice-content">
               <button onClick={this.changeDice}><img src={this.props.selectedDice} alt="diceImage" /></button>
            </div>
        )
    }
}
