import React, { Component } from 'react'

export default class Dice extends Component {
    state = {
        counter: 1,
    }

    rollDice = () => {
        const randomNum = (min, max) => {
            return Math.round(Math.random() * (max - min) + min);
        }
        this.setState((state) => {
            return {
                counter: 0
            }
        })
        setTimeout(() => {
            this.setState((state) => {
                return {
                    counter: randomNum(1, 6)
                }
            })
        }, 1000)
    }
    diceImg = {
        0: '/img/dice-empty.png',
        1: '/img/dice1.png',
        2: '/img/dice2.png',
        3: '/img/dice3.png',
        4: '/img/dice4.png',
        5: '/img/dice5.png',
        6: '/img/dice6.png',
    }
    render() {
        return (
            <div class="dice">
            <img onClick={this.rollDice} src={this.diceImg[this.state.counter]} alt="dice" class="diceImg"/>
            </div>
        )
    }
}

// import React, { Component } from 'react';

// class Dice extends Component {
//     state = {
//         diceNr: 1
//     }

//     constructor(props) {
//         super(props);
//     }

//     clickHandler = (props) => {
//         this.setState((state, props) => ({
//             diceNr: state.diceNr * this.rollDice()
//         }))
//     }

//     rollDice = () => {
//         let diceNr = Math.floor(Math.random()* (6 - 0) + 0);
//         return diceNr;
//     }

//     render() {

//         const diceOptions = [
//             "./img/dice1.png",
//             "./img/dice2.png",
//             "./img/dice3.png",
//             "./img/dice4.png",
//             "./img/dice5.png",
//             "./img/dice6.png",];


//         return (
//             <div class="dice">
//                 <img src={diceOptions[this.state.diceNr]} alt="dice image" class="diceImg" onClick={this.clickHandler()}/>
                
//             </div>
//         );
//     }
// }

// export default Dice;

//on click a random number between 1-6 sould be selected
//