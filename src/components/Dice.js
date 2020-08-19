import React, { Component } from 'react'

export default class Dice extends Component {

    state = {
        dice: ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png'],
        emptyDie: '/img/dice-empty.png',
        moveStarted: false
    }


    handleClick = () => {
        this.setState({
            moveStarted: true
        })

        // Set Timeout somehow by getting around the this keyword

        this.setState({
            moveStarted: false
        })
    }


    render() {
        return (
            <div>
                {!this.state.moveStarted && <img onClick={this.handleClick} className='dice' src={this.state.dice[Math.floor( Math.random()*6)]} alt=""/>}
                {this.state.moveStarted && <img className='dice' src={this.state.emptyDie} alt=""/>}
            </div>
        )
    }
}
