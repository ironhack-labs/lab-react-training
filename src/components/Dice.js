import React, { Component } from 'react'

class Dice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgSource: "img/dice3.png",
            imgEmpty: "img/dice-empty.png",
            isThrowing: false

        }
    }

    throwDice() {
        if (!this.state.isThrowing) {
            this.setState({
                imgSource: this.state.imgEmpty,
                isThrowing: true
            })
            setTimeout(() => {
                const diceArray = ['img/dice1.png','img/dice2.png','img/dice3.png','img/dice4.png','img/dice5.png','img/dice6.png']
                const newDice = diceArray[Math.floor(Math.random() * diceArray.length)]
                this.setState({
                    imgSource: newDice,
                    isThrowing: false
                })
            },1000)
        }
    }

    render() {
        return (
            <img onClick={() => this.throwDice()} style={{width:"150px"}} src={this.state.imgSource} alt="dice"/>
        )
    }
}

export default Dice
