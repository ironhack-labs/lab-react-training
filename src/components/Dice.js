import React, { Component } from 'react'
let diceEmpty = '../img/dice-empty.png'
let dices = ['../img/dice1.png', '../img/dice2.png', '../img/dice3.png', '../img/dice4.png', '../img/dice5.png', '../img/dice6.png', ]

export default class Dice extends Component {
    
    state = {
        img: dices[Math.floor(Math.floor(Math.random() * 6))],
        clicked: false
    }

    clicked = () => {
        setTimeout(() => {
            this.setState({clicked: false, img: dices[Math.floor(Math.floor(Math.random() * 6))]})   
        }, 100);
        
        this.setState({clicked: true, img: diceEmpty})   
    }
 
    render() {
        return (
        <div className="Dice card mb-3">
            <div className="row g-0">
                <div className="card-body">
                    <img className="clickableImg" src={this.state.img} onClick={this.clicked} width="50px" alt="Dice" align="right"/>
                </div>
            </div>
        </div>
        )
    }
}