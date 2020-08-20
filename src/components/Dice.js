import React from 'react'

let dice = [
    './img/dice1.png',
    './img/dice2.png',
    './img/dice3.png',
    './img/dice4.png',
    './img/dice5.png',
    './img/dice6.png'
]

class Dice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dice: dice[Math.floor(Math.random()*dice.length)]
        }
    }

    changeDice = () => {
        this.setState({
            dice: './img/dice-empty.png'
        })
        setTimeout(() => {
            this.setState({
                dice: dice[Math.floor(Math.random()*dice.length)]
            })
        }, 1000)
    }

    render() {
        return (
            <img onClick={this.changeDice} src={this.state.dice} alt="dice" style={{width: '100px'}}></img>
        )
    }
}

export default Dice;