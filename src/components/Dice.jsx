import React, { Component } from 'react'

export class Dice extends Component {

pictureArray = ['./img/dice1.png', './img/dice2.png', './img/dice3.png', './img/dice4.png', './img/dice5.png', './img/dice6.png'];

    state = {
number: 0,
imgURL: './img/dice-empty.png' 
    };

handleClick = () => {
        let randomNb = Math.floor(Math.random() * 6);
        this.setState ({number: randomNb});
     };

changeImage = () => {
        this.setState({imgURL: './img/dice-empty.png'});

    setTimeout(() => { 
        this.setState({imgURL: this.pictureArray[this.state.number]})
     }, 1000);
}

    render() {
        return (
            <div>
                <button  
                onClick={(event) => {this.handleClick(); this.changeImage()}}>
                <img src = {this.state.imgURL} alt ="dice" />
                </button>
            </div>
        )
    }
}

export default Dice
