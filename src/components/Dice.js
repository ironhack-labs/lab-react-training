import React, { Component } from 'react'

let dice = [
    '/img/dice1.png',
    '/img/dice2.png',
    '/img/dice3.png',
    '/img/dice4.png',
    '/img/dice5.png',
    '/img/dice6.png'
]

class Dice extends Component {
  
    state = {
        imgsrc: dice[Math.floor(Math.random()*dice.length)]
    }

    changeDice = () => {
        this.setState({
            imgsrc: './img/dice-empty.png'
        })

        setTimeout(() => {
            this.setState({
                imgsrc: dice[Math.floor(Math.random()*dice.length)]
            })
        }, 1000)
    }

    render () {
    return (
        <div>
            <img src={this.state.imgsrc} onClick={this.changeDice} alt="" height="100"/>
        </div>
    )}
}

export default Dice