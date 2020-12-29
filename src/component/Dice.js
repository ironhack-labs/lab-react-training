import React, { Component } from 'react'

export class Dice extends Component {
        state = {
                dice: 3
        };
        rollDice = () => {
                setTimeout(() => {
                        document.getElementById("dice").setAttribute("src", '/img/dice-empty.png')
                }, 100);
                setTimeout(() => {
                        this.setState({
                                dice: Math.floor(Math.random() * 6 + 1)
                        })
                }, 1100)

        };
        render() {
                return (
                        <div align='center'>
                                <img src={`/img/dice${this.state.dice}.png`} onClick={this.rollDice} alt={`dice${this.state.dice}`} width="100px" height="100px" id="dice" />
                        </div>
                )
        }
}

export default Dice
