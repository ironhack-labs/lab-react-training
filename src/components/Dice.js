import React, { Component } from 'react'
export default class Dice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            diceNumber: this.randomDice()
        }
        this.changeDice = this.changeDice.bind(this)
    }

    randomDice() {
        return 1 + Math.floor(Math.random() * 6)
    }

    changeDice() {
        if (this.state.diceNumber) {
            this.setState({
                diceNumber: null
            })

            setTimeout(() => {
                this.setState({
                    diceNumber: this.randomDice()
                })
            }, 1000)
        }
    }

    render() {
        let imgSrc = '';
        if (this.state.diceNumber) {
            imgSrc = `/img/dice${this.state.diceNumber}.png`
        } else {
            imgSrc = `/img/dice-empty.png`

        }
        return (
            <div>
                <img onClick={this.changeDice} src={imgSrc} />
            </div>
        )
    }
}
