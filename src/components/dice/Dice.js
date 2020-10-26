import React, { Component } from 'react'
import './Dice.css'

export default class Dice extends Component {
    
    
    state = {
        dices: ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png', '/img/dice-empty.png'],
        randomNumber: Math.floor(Math.random()*5),
        indexShowedDice: 0
    }


    clickedDice = () => {
        this.setState({
            indexShowedDice: this.state.randomNumber,
            randomNumber: 6
        })

        // console.log(this.state.indexShowedDice)
        // console.log(this.state.randomNumber)

        window.setTimeout(this.changeDice, 1*1000)
    }

    changeDice = () => {
        let newRandomNumber = Math.floor(Math.random()*5)

        while(newRandomNumber === this.state.indexShowedDice) {
            newRandomNumber = Math.floor(Math.random()*5)
        }

        this.setState({
            randomNumber: newRandomNumber
        })
       
    }


    render() {
 
        return (
            <div>
                <img className ='dice'
                    src={this.state.dices[this.state.randomNumber]} 
                    alt='Random dice' 
                    onClick={this.clickedDice}></img>
            </div>
        )
    }
}
