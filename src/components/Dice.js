import React, { Component } from 'react'

let faces = [
    '/img/dice1.png',
    '/img/dice2.png',
    '/img/dice3.png',
    '/img/dice4.png',
    '/img/dice5.png',
    '/img/dice6.png'
];

export default class Dice extends Component {

    state = {
        faces,
        displayedFace: faces[Math.floor(Math.random() * 6)]
    };

    randomFace = () => {
        let displayedFace = this.state.faces[Math.floor(Math.random() * 6)];

        this.setState({
            displayedFace: displayedFace
        });
    }

    selectedFace = () => {
        this.setState({
            displayedFace: '/img/dice-empty.png'
        })
        setTimeout(() => {this.randomFace()}, 1000)
    }

    render() {
        return (
            <img onClick={this.selectedFace} src={this.state.displayedFace} alt="dice" height="200px" />
        )
    }
}
