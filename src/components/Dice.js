import React, { Component } from "react"
import diceEmpty from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"

class Dice extends Component {
    state = {
        randomDice: dice3
    }

    randomDice = () => {
        const dices = [dice1, dice2, dice3, dice4, dice5, dice6]
        this.setState({
            randomDice: diceEmpty
        })
        setTimeout(() => {
            this.setState({
                randomDice: dices[Math.floor(Math.random()*dices.length)]
            })
        }, 2000);
    }

    render() {
        return (
            <div>
                <img onClick={this.randomDice} src={this.state.randomDice} style={{width: "100px", height: "100px"}} alt="img" />
            </div>
        )
    }
}

export default Dice;